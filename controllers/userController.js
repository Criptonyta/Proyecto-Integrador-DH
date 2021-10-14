const fs = require('fs');
const path = require("path");
const bcryptjs = require('bcryptjs');
const pathFuncionesAuxiliares = path.join(__dirname, '../public/funcionesAuxiliares/mainControllerAux.js');
const auxiliares = require(pathFuncionesAuxiliares);

const {
    instrumentsModel,
    songsModel,
    usersModel
} = require("../models/index"); //Importamos los models
const skills = ["Bajista", "Baterista", "Cantante", "Guitarrista", "Multiinstrumentalista", "Productor", "Otros"] //Skills

const controlador = {
    userprofile: (req, res) => {
        const usuarioInfo = usersModel.findUser(req.params.iduser)
        const songsUser = songsModel.findArtistSongs(req.params.iduser)
        const instrumentUser = instrumentsModel.findArtistInstruments(req.params.iduser)

        res.render('userprofile.ejs', {
            usuarioInfo,
            songsUser,
            instrumentUser
        });
    },
    viewuserprofile: (req, res) => {
        const usuarioInfo = usersModel.findUser(req.params.iduser)
        const songsUser = songsModel.findArtistSongs(req.params.iduser)
        const instrumentUser = instrumentsModel.findArtistInstruments(req.params.iduser)

        res.render('viewUserProfile.ejs', {
            usuarioInfo,
            songsUser,
            instrumentUser
        });
    },
    userprofileEdit: (req, res) => {
        const usuarioInfo = usersModel.findUser(req.params.iduser)
        res.render('userprofileEdit.ejs', {
            usuarioInfo,
            habilidades: skills
        });
    },
    userprofileEditNew: (req, res) => { //editar usuario
        const profileOld = usersModel.findUser(req.params.iduser)
        if (typeof req.file == "object" && req.file.filename) {

            const profileNew = {
                email: req.body.email,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                password: bcryptjs.hashSync(req.body.password, 10),
                userAvatarButton: req.file.filename,
                bio: req.body.minibio,
                skills: req.body.skills
            }

            usersModel.editarUsuario(profileOld, profileNew)

            const usuarioInfo = usersModel.findUser(req.params.iduser)
            const songsUser = songsModel.findArtistSongs(req.params.iduser)
            const instrumentUser = instrumentsModel.findArtistInstruments(req.params.iduser)

            res.render('userprofile.ejs', {
                usuarioInfo,
                songsUser,
                instrumentUser
            });
        } else {
            const profileNew = {
                email: req.body.email,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                password: bcryptjs.hashSync(req.body.password, 10),
                userAvatarButton: profileOld.img,
                bio: req.body.minibio,
                skills: req.body.skills
            }

            usersModel.editarUsuario(profileOld, profileNew)

            const usuarioInfo = usersModel.findUser(req.params.iduser)
            const songsUser = songsModel.findArtistSongs(req.params.iduser)
            const instrumentUser = instrumentsModel.findArtistInstruments(req.params.iduser)

            res.render('userprofile.ejs', {
                usuarioInfo,
                songsUser,
                instrumentUser
            });


        }
    },
    login: (req, res) => {
        res.render('login.ejs');
    },
    loginpost: (req, res) => {
        let userToLogin = usersModel.findByField('email', req.body.email) // Busca el usuario x email
        if (userToLogin) {
            let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password) // compara contrasena del form con la de la BD
            if (isOkPassword) {
                delete userToLogin.password
                req.session.userLogged = userToLogin
                console.log(req.session.userLogged)
                res.redirect('/user/userprofile/' + userToLogin.id)
            } else {
                res.redirect('/user/login')
            }
        } else {
            res.redirect('/user/login')
        }
    },

    register: (req, res) => {
        res.render('register.ejs', {
            habilidades: skills
        });

    },

    registerpost: (req, res) => {
        let usuarioBuscado = usersModel.findByField("email", req.body.email)
        if (usuarioBuscado != undefined) { //Si el mail ya esta registrado...
            res.send("el mail ya esta registrado")
        } else { //Si el mail del usuario no esta en la base de datos...
            let createNewId = usersModel.crearId();
            let newPassword = bcryptjs.hashSync(req.body.password, 10);
            let createNewUser = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                password: newPassword,
                email: req.body.email,
                userAvatar: req.file.filename,
                skills: req.body.skills,
                bio: req.body.minibio,
            }
            usersModel.agregarUsuario(createNewUser)
            const artistsDB = usersModel.findArtists() //Los artistas son los que tienen bio
            const datos = auxiliares.buscarNelementosAleatorios(artistsDB, "id", 3);
            return res.render('home.ejs', {
                datos: datos
            });
        }
    },




    deleteSongs: (req, res) => {
        songsModel.borrarNcanciones(req.body.eliminarCancion)
        res.send("productos borrados") //CUANDO ESTE SESSION SE PUEDE REDIRIGIR A LA MISMA DE USUARIO PAGINA USANDO SU ID
    },
    deleteInstruments: (req, res) => {
        instrumentsModel.borrarNinstrumentos(req.body.eliminarInstrumento)
        res.send("productos borrados") //CUANDO ESTE SESSION SE PUEDE REDIRIGIR A LA MISMA DE USUARIO PAGINA USANDO SU ID
    }
};

module.exports = controlador