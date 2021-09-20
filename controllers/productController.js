const fs = require ('fs');
const path = require ("path");
const pathInstruments = path.join(__dirname, '../database/instrumentsDB.json');
const pathSongs = path.join(__dirname, '../database/songsDB.json');
const pathUsers= path.join(__dirname, '../database/usersDB.json');
const auxiliares = require("../public/funcionesAuxiliares/ProductControllerAux.js")
 
const controlador = {
    instrumentDetail: (req, res) => {
        const instrumentos = JSON.parse(fs.readFileSync(pathInstruments));
        const instrumento = instrumentos.find(elemento => elemento.InstrumId.id == req.params.id);
        const relacionados = instrumentos.slice(1,5)//Instrumentos relacionados

        res.render('product.ejs', {producto:instrumento,relacionados});

    },
    songDetail: (req, res) => {
        const songs = JSON.parse(fs.readFileSync(pathSongs));
        const song = songs.find(elemento => elemento.songId.id == req.params.id);
        const relacionados = songs.slice(1,5)//Instrumentos relacionados
        res.render('product.ejs', {producto:song,relacionados});

    },
    artistDetail:(req, res) => {//FALTA HACER

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
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments));
        const songsDB = JSON.parse(fs.readFileSync(pathSongs));
        const usersDB =JSON.parse(fs.readFileSync(pathUsers));

        const instrumentos = instrumentsDB.slice(1,7);        
        const musicos = songsDB.slice(1,7);

        const artistsDB = usersDB.filter(item => item.bio != "")//Los artistas son los que tienen bio
        const datos = artistsDB.slice(1,5);
       
        res.render('tienda.ejs',{datos:datos,musicos:musicos,instrumentos:instrumentos});
    },
    songs: (req,res) => {
        const songsDB = JSON.parse(fs.readFileSync(pathSongs));
        const musicos = songsDB;
        res.render("allSongs.ejs",{musicos})
    },
    instruments:(req,res) => {
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments));
        const instrumentos = instrumentsDB;
        res.render("allInstruments.ejs",{instrumentos})
    },
    artists:(req,res) => {
        const usersDB = JSON.parse(fs.readFileSync(pathUsers));
        const artistsDB = usersDB.filter(item => item.bio != "")//Los artistas son los que tienen bio
        const artistas = artistsDB;
        res.render("allArtists.ejs",{artistas})
    },
    searched:(req,res) => {//Controlador para mostrar cuando se busca algo
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments));
        const songsDB = JSON.parse(fs.readFileSync(pathSongs));
        const usersDB =JSON.parse(fs.readFileSync(pathUsers));
        const artistsDB = usersDB.filter(item => item.bio != "")//Los artistas son los que tienen bio

        const buscado = req.query.search
        const palabras = buscado.split(' ')
        const resultadosSongs = auxiliares.checkAtribute(songsDB,["titulo","descripcion","nombre","apellido"],palabras)//Canciones que coinciden
        const resultadosInstruments = auxiliares.checkAtribute(instrumentsDB,["titulo","descripcion"],palabras)//Instrumentos que coinciden
        const resultadosArtistas = auxiliares.checkAtribute(artistsDB,["nombre","apellido","skills","bio"],palabras)//Artistas que coinciden


        res.render("allSearched.ejs",{musicos:resultadosSongs,instrumentos:resultadosInstruments,artistas:resultadosArtistas})
    }
};


module.exports = controlador;