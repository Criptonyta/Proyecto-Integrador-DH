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
};


module.exports = controlador