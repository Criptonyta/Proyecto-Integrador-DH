const fs = require('fs');
const path = require("path");

const {instrumentsModel,songsModel,usersModel} = require("../models/index");//Importamos los models
const skills = ["Bajista","Baterista","Cantante","Guitarrista","Multiinstrumentalista","Productor","Otros"]//Skills

const controlador = {
    userprofile: (req, res) => {
        const usuarioInfo = usersModel.findUser(req.params.iduser)
        const songsUser = songsModel.findArtistSongs(req.params.iduser)
        const instrumentUser = instrumentsModel.findArtistInstruments(req.params.iduser)

        res.render('userprofile.ejs', {usuarioInfo,songsUser,instrumentUser});
    },
    viewuserprofile: (req, res) => {
        const usuarioInfo = usersModel.findUser(req.params.iduser)
        const songsUser = songsModel.findArtistSongs(req.params.iduser)
        const instrumentUser = instrumentsModel.findArtistInstruments(req.params.iduser)

        res.render('viewUserProfile.ejs', {usuarioInfo,songsUser,instrumentUser});
    },
    userprofileEdit: (req, res) => {
        const usuarioInfo = usersModel.findUser(req.params.iduser)
        res.render('userprofileEdit.ejs',{usuarioInfo,habilidades:skills});
    },
    userprofileEditNew: (req, res) => {//editar usuario
        const profileOld = usersModel.findUser(req.params.iduser)
        const profileNew = {email:req.body.email,nombre:req.body.nombre,apellido:req.body.apellido,password:req.body.password,userAvatarButton:req.body.userAvatarButton,minibio:req.body.minibio,skills:req.body.skills}

        usersModel.editarUsuario(profileOld,profileNew)

        const usuarioInfo = usersModel.findUser(req.params.iduser)
        const songsUser = songsModel.findArtistSongs(req.params.iduser)
        const instrumentUser = instrumentsModel.findArtistInstruments(req.params.iduser)

        res.render('userprofile.ejs', {usuarioInfo,songsUser,instrumentUser});
    },
    login: (req, res) => {
        res.render('login.ejs');
    },
    register: (req, res) => {
        res.render('register.ejs');
    },
    deleteSongs: (req, res) => {
        songsModel.borrarNcanciones(req.body.eliminarCancion)
        res.send("productos borrados")//CUANDO ESTE SESSION SE PUEDE REDIRIGIR A LA MISMA DE USUARIO PAGINA USANDO SU ID
    },
    deleteInstruments: (req, res) => {
        instrumentsModel.borrarNinstrumentos(req.body.eliminarInstrumento)
        res.send("productos borrados")//CUANDO ESTE SESSION SE PUEDE REDIRIGIR A LA MISMA DE USUARIO PAGINA USANDO SU ID
    }
};

module.exports = controlador