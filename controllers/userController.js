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


        res.render('userprofile.ejs', {anuncioUser,usuarioInfo});
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
    userprofileEditNew: (req, res) => {
        const userDB = require(pathUsers);
        const songsDB = require(pathSongs);
        const instrumentsDB = require(pathInstruments);

        const usuarioInfo = userDB.find(usuario => usuario.id == req.params.iduser)
        const songsUser = songsDB.filter(song => song.id == req.params.iduser);
        const instrumentUser = instrumentsDB.filter(instrument => instrument.id == req.params.iduser);
        const anuncioUser = [...songsUser, ...instrumentUser];
        const skills = ["Bajista","Baterista","Cantante","Guitarrista","Multiinstrumentalista","Productor","Otros"]

        res.send(req.body)



    },


    login: (req, res) => {
        res.render('login.ejs');
    },

    register: (req, res) => {
        res.render('register.ejs');
    },
};


module.exports = controlador