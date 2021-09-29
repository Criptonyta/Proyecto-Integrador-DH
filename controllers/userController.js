const fs = require('fs');
const path = require("path");
const pathInstruments = path.join(__dirname, '../database/instrumentsDB.json');
const pathSongs = path.join(__dirname, '../database/songsDB.json');
const pathUsers = path.join(__dirname, '../database/usersDB.json');

const controlador = {
    userprofile: (req, res) => {
        const userDB = require(pathUsers);
        const songsDB = require(pathSongs);
        const instrumentsDB = require(pathInstruments);

        const usuarioInfo = userDB.find(usuario => usuario.id == req.params.iduser)
        const songsUser = songsDB.filter(song => song.id == req.params.iduser);
        const instrumentUser = instrumentsDB.filter(instrument => instrument.id == req.params.iduser);
        const anuncioUser = [...songsUser, ...instrumentUser];


        res.render('userprofile.ejs', {anuncioUser,usuarioInfo,songsUser,instrumentUser});
    },
    viewuserprofile: (req, res) => {
        const userDB = require(pathUsers);
        const songsDB = require(pathSongs);
        const instrumentsDB = require(pathInstruments);

        const usuarioInfo = userDB.find(usuario => usuario.id == req.params.iduser)
        const songsUser = songsDB.filter(song => song.id == req.params.iduser);
        const instrumentUser = instrumentsDB.filter(instrument => instrument.id == req.params.iduser);

        res.render('viewUserProfile.ejs', {usuarioInfo,songsUser,instrumentUser});
    },
    userprofileEdit: (req, res) => {
        const userDB = require(pathUsers);
        const songsDB = require(pathSongs);
        const instrumentsDB = require(pathInstruments);

        const usuarioInfo = userDB.find(usuario => usuario.id == req.params.iduser)
        const songsUser = songsDB.filter(song => song.id == req.params.iduser);
        const instrumentUser = instrumentsDB.filter(instrument => instrument.id == req.params.iduser);
        const anuncioUser = [...songsUser, ...instrumentUser];
        const skills = ["Bajista","Baterista","Cantante","Guitarrista","Multiinstrumentalista","Productor","Otros"]


        res.render('userprofileEdit.ejs',{anuncioUser,usuarioInfo,skills});
    },
    userprofileEditNew: (req, res) => {//editar usuario
        const userDB = require(pathUsers);
        const songsDB = require(pathSongs);
        const instrumentsDB = require(pathInstruments);

        const skills = ["Bajista","Baterista","Cantante","Guitarrista","Multiinstrumentalista","Productor","Otros"]

        const profileNew = {email:req.body.email,
                           nombre:req.body.nombre,
                           apellido:req.body.apellido,
                           password:req.body.password,
                           userAvatarButton:req.body.userAvatarButton,
                           minibio:req.body.minibio,
                           skills:req.body.skills}

        userDB.forEach(function(usuario){
            if (usuario.id == req.params.iduser){
                usuario.email = profileNew.email;
                usuario.nombre = profileNew.nombre;
                usuario.apellido = profileNew.apellido;
                usuario.password = profileNew.password;
                usuario.minibio = profileNew.minibio;
                usuario.skills = profileNew.skills;
            }
        })
        fs.writeFileSync(pathUsers,JSON.stringify(userDB))

        const usuarioInfo = userDB.find(usuario => usuario.id == req.params.iduser)
        const songsUser = songsDB.filter(song => song.id == req.params.iduser);
        const instrumentUser = instrumentsDB.filter(instrument => instrument.id == req.params.iduser);
        const anuncioUser = [...songsUser, ...instrumentUser];


        res.render('userprofile.ejs', {anuncioUser,usuarioInfo,songsUser,instrumentUser});

    },


    login: (req, res) => {
        res.render('login.ejs');
    },

    register: (req, res) => {
        res.render('register.ejs');
    },
    deleteSongs: (req, res) => {
        let songsDB = JSON.parse(fs.readFileSync(pathSongs,"utf-8"))
        const elemsBorrar = req.body.eliminarCancion //una lista con los songId de las canciones a borrar
        for (let i=0; i< elemsBorrar.length; i++) {//Borramos las canciones de songsDB
            songsDB = songsDB.filter(elementos => elementos["songId"] != elemsBorrar[i]) 
        }
        fs.writeFileSync(pathSongs,JSON.stringify(songsDB))
        res.send("productos borrados")//CUANDO ESTE SESSION SE PUEDE REDIRIGIR A LA MISMA DE USUARIO PAGINA USANDO SU ID
    },
    deleteInstruments: (req, res) => {
        let instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments,"utf-8"))
        const elemsBorrar = req.body.eliminarInstrumento //una lista con los songId de las canciones a borrar
        for (let i=0; i< elemsBorrar.length; i++) {//Borramos las canciones de songsDB
            instrumentsDB = instrumentsDB.filter(elementos => elementos["InstrumId"] != elemsBorrar[i]) 
        }
        fs.writeFileSync(pathInstruments,JSON.stringify(instrumentsDB))
        res.send("productos borrados")//CUANDO ESTE SESSION SE PUEDE REDIRIGIR A LA MISMA DE USUARIO PAGINA USANDO SU ID

    }
};


module.exports = controlador