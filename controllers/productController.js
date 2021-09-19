const fs = require ('fs');
const path = require ("path");
const pathInstruments = path.join(__dirname, '../database/instrumentsDB.json');
const pathSongs = path.join(__dirname, '../database/songsDB.json');
const pathUsers= path.join(__dirname, '../database/usersDB.json');
 
const controlador = {
    instrumentDetail: (req, res) => {
        const instrumentos = JSON.parse(fs.readFileSync(pathInstruments));
        const instrumento = instrumentos.find(elemento => elemento.InstrumId.id == req.params.id);
        res.render('product.ejs', {producto:instrumento});

    },
    songDetail: (req, res) => {
        const songs = JSON.parse(fs.readFileSync(pathSongs));
        const song = songs.find(elemento => elemento.songId.id == req.params.id);
        res.render('product.ejs', {producto:song});

    },
    //falta hacer la vista de usuario
    userDetail: (req, res) => {
        const songs = JSON.parse(fsreadFileSync(pathUsers));
        res.render('product.ejs', {user});
    },

    productempty: (req, res) => {
        res.render('productempty.ejs');
    },

    songempty: (req, res) => {
        res.render('songempty.ejs');
    },

    tienda: (req, res) => {
        const instrumentsDB = require('../database/instrumentsDB.json');
        const songsDB = require('../database/songsDB.json');
        const usersDB = require('../database/usersDB.json');  

        const instrumentos = instrumentsDB.slice(1,7);        
        const musicos = songsDB.slice(1,7);
        const datos = usersDB.slice(1,5);

       
        res.render('tienda.ejs',{datos:datos,musicos:musicos,instrumentos:instrumentos});
    },
    songs: (req,res) => {
        const songsDB = require('../database/songsDB.json');
        const musicos = songsDB;
        res.render("allSongs.ejs",{musicos:musicos})
    },
    instruments:(req,res) => {
        const instrumentsDB = require('../database/instrumentsDB.json');
        const instrumentos = instrumentsDB;
        res.render("allInstruments.ejs",{instrumentos:instrumentos})
    }
};


module.exports = controlador;