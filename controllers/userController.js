const controlador = {
    userprofile: (req, res) => {
        const fs = require('fs');
        const path = require("path");
        const pathInstruments = path.join(__dirname, '../database/instrumentsDB.json');
        const pathSongs = path.join(__dirname, '../database/songsDB.json');
        const pathUsers = path.join(__dirname, '../database/usersDB.json');

        const songsDB = require(pathSongs);
        const instrumentsDB = require(pathInstruments);

        const songsUser = songsDB.filter(song => song.id == req.params.iduser);
        const instrumentUser = instrumentsDB.filter(instrument => instrument.id == req.params.iduser);
        const anuncioUser = [...songsUser, ...instrumentUser];


        res.render('userprofile.ejs', {
            anuncioUser
        });
    },

    login: (req, res) => {
        res.render('login.ejs');
    },

    register: (req, res) => {
        res.render('register.ejs');
    },
};


module.exports = controlador