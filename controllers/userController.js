const fs = require('fs');
const path = require("path");
const bcryptjs = require('bcryptjs');
const {
    validationResult
} = require("express-validator")

const {
    instrumentsModel,
    songsModel,
    usersModel
} = require("../models/index"); //Importamos los models
const skills = ["Bajista", "Baterista", "Cantante", "Guitarrista", "Multiinstrumentalista", "Productor", "Otros"] //Skills

const controlador = {
    userprofile: async (req, res) => {
        try {
            const usuarioInfo = await usersModel.findUser(req.params.iduser)
            const songsUser = await songsModel.findArtistSongs(req.params.iduser)
            const instrumentUser = await instrumentsModel.findArtistInstruments(req.params.iduser)

            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
                res.locals.idusuario = req.cookie.recordame.id
            }

            res.render('userprofile.ejs', {
                usuarioInfo,
                songsUser,
                instrumentUser
            });
        } catch (e) {
            console.log('error renderizando usuario')
        }
    },
    viewuserprofile: async (req, res) => {
        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged == undefined) {
            res.locals.idusuario = "noLogueado"
        } else if (req.session != undefined) {
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        } else {
            res.locals.idusuario = req.cookie.recordame.id
        }

        let id = req.params.iduser
        if (id == req.session.userLogged) {
            res.redirect("/user/userprofile/" + id)
        } else if (id == req.cookies.recordame) {
            res.redirect("/user/userprofile/" + id)
        } else {
            try {
                const usuarioInfo = await usersModel.findUser(id)
                const songsUser = await songsModel.findArtistSongs(id)
                const instrumentUser = await instrumentsModel.findArtistInstruments(id)

                res.render('viewUserProfile.ejs', {
                    usuarioInfo,
                    songsUser,
                    instrumentUser
                });
            } catch (e) {
                console.log('error mostrando el perfil del usuario')
            }
        }
    },
    userprofileEdit: async (req, res) => {
        try {
            const usuarioInfo = await usersModel.findUser(req.params.iduser)

            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
                res.locals.idusuario = req.cookie.recordame.id
            }

            res.render('userprofileEdit.ejs', {
                usuarioInfo,
                habilidades: skills
            });
        } catch (e) {
            console.log('error editando perfil del usuario')
        }
    },
    userprofileEditNew: async (req, res) => { //editar usuario
        const usuarioInfo = await usersModel.findUser(req.params.iduser)
        const errores = validationResult(req)
        if (!errores.isEmpty()) {
            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
                res.locals.idusuario = req.cookie.recordame.id
            }
            return res.render('userprofileEdit.ejs', {
                errors: errores.array(),
                oldData: req.body,
                habilidades: skills,
                usuarioInfo
            })
        }
        try {
            const profileOld = await usersModel.findUser(req.params.iduser)
            const profileNew = {
                email: req.body.email,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                password: bcryptjs.hashSync(req.body.password, 10),
                bio: req.body.minibio,
                skills: req.body.skills
            }
            if (typeof req.file == "object" && req.file.filename) {
                profileNew.userAvatar = req.file.filename
                console.log("Nueva foto");
            } //El usuario cargo una nueva foto
            else {
                profileNew.userAvatar = profileOld.userAvatar
            } //El usuario no cargo una nueva foto

            if (req.body.password) {
                profileNew.password = bcryptjs.hashSync(req.body.password, 10)
            } //Cargo nueva password
            else {
                profileNew.password = profileOld.password
            } //No cargo nueva password



            await usersModel.editarUsuario(profileNew, profileOld.id)
            res.redirect("/user/userprofile/" + req.params.iduser);
        } catch (e) {
            console.log('error editando el nuevo usuario')
        }
    },
    login: (req, res) => {
        res.render('login.ejs')
    },

    loginpost: async (req, res) => {
        try {
            const errores = validationResult(req)
            if (!errores.isEmpty()) {
                return res.render('login.ejs', {
                    errors: errores.array(),
                    oldData: req.body
                })
            }
            let userToLogin = await usersModel.findByField('email', req.body.email) // Busca el usuario x email

            if (userToLogin) {
                console.log(userToLogin.password)
                let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password) // compara contrasena del form con la de la BD
                console.log("contrasena:" + isOkPassword)

                if (isOkPassword) {

                    if (req.body.checkboxLogin) {
                        res.cookie('recordame', userToLogin.id, {
                            maxAge: 60000 * 30
                        })
                    }
                    delete userToLogin.password
                    req.session.userLogged = userToLogin
                    res.redirect('/user/userprofile/' + userToLogin.id)
                } else {
                    res.redirect('/user/login')
                }
            } else {
                res.redirect('/user/login')
            }
        } catch (e) {
            console.log('error al loguear')
        }
    },

    register: (req, res) => {
        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged == undefined) {
            res.locals.idusuario = "noLogueado"
        } else if (req.session != undefined) {
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        } else {
            res.locals.idusuario = req.cookie.recordame.id
        }
        res.render('register.ejs', {
            habilidades: skills // esta es la dinamica de la lista desplegable del formulario
        });
    },
    registerpost: async (req, res) => {
        const errores = validationResult(req)
        if (!errores.isEmpty()) {
            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
                res.locals.idusuario = req.cookie.recordame.id
            }
            return res.render('register.ejs', {
                errors: errores.array(),
                oldData: req.body,
                habilidades: skills
            })
        }
        try {
            let usuarioBuscado = await usersModel.findByField("email", req.body.email)
            if (usuarioBuscado != undefined) { //Si el mail ya esta registrado...
                res.send("el mail ya esta registrado")
            } else { //Si el mail del usuario no esta en la base de datos...
                let createNewId = await usersModel.crearId();
                let newPassword = bcryptjs.hashSync(req.body.password, 10);
                let createNewUser = {
                    id: createNewId,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    password: newPassword,
                    email: req.body.email,
                    skills: req.body.skills,
                    bio: req.body.minibio,
                }
                if (req.file) {
                    createNewUser.userAvatar = req.file.filename
                } else { // Si el usuario no elige un avatar, lo asignamos randomicamente entre nuestras opciones

                    let imgArray = ["default1.jpg", "default2.jpg", "default3.jpg", "default4.jpg", "default5.jpg", "default6.jpg", "default7.jpg", "default8.jpg", "default9.jpg"];
                    let rand = imgArray[Math.floor(Math.random() * imgArray.length)];
                    createNewUser.userAvatar = rand

                    // createNewUser.userAvatar = "default.jpg" || "default2.jpg" || "default3.jpg" || "default4.jpg" || "default5.jpg" || "default6.jpg" || "default7.jpg" || "default8.jpg" || "default9.jpg" // TO DO - ver si funciona, si no funciona usar math.round
                }
                console.log(createNewUser)
                await usersModel.agregarUsuario(createNewUser)
                res.redirect("/user/login"); //Te manda a al login
            }
        } catch (e) {
            console.log('error al registrar al usuario')
        }
    },
    deleteSongs: async (req, res) => {
        try {
            let elementos = req.body.eliminarCancion // o es una lista o es un numero
            if (Array.isArray(elementos)) {
                await songsModel.borrarNcanciones(elementos)
            } else {
                await songsModel.borrarCancion(elementos)
            }
            res.redirect("/user/userprofile/" + req.params.iduser);
        } catch (e) {
            console.log('error eliminando las canciones')
        }
    },
    deleteInstruments: async (req, res) => {
        try {
            let elementos = req.body.eliminarInstrumento // o es una lista o es un numero
            if (Array.isArray(elementos)) {
                await instrumentsModel.borrarNinstrumentos(elementos)
            } else {
                await instrumentsModel.borrarInstrumento(req.body.eliminarInstrumento)
            }
            res.redirect("/user/userprofile/" + req.params.iduser);
        } catch (e) {
            console.log('error eliminando el producto')
        }
    },
    logout: function (req, res) {
        res.clearCookie("recordame");
        req.session.destroy();
        res.redirect("/user/login")
    },

    apiUserList: async (req, res) => { // API PARA TODOS LOS USUARIOS
        try {
            await usersModel.getAll()
                .then(resultApiUsers => {
                    return res.status(200).json({
                        total: resultApiUsers.length,
                        // url: 'users/userdetail/' +: id, TODO PRESENTAR URL DETALLE
                        data: resultApiUsers,
                        status: 200
                    })
                })
        } catch (error) {
            return res.status(500).json({
                total: 0,
                data: [],
                status: 500
            })
        }
    },
    apiUserItem: async (req, res) => { // API PARA 1 USUARIO
        try {
            await usersModel.findUser(req.params.id)
                .then(resultApiUserItem => {
                    delete resultApiUserItem.dataValues.password // Evita que se exiba la pass via API
                    return res.status(200).json({
                        // TODO  un array por cada relaci??n de uno a muchos (categories, colors, etc).
                        // url: 'user/detailInstrument/' +: InstrumId, TODO PRESENTAR URL CON IMG
                        data: resultApiUserItem.dataValues,
                        status: 200
                    })
                })
        } catch (error) {
            return res.status(500).json({
                total: 0,
                data: [],
                status: 500
            })
        }
    },

};

module.exports = controlador