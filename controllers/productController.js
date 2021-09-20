const fs = require('fs');
const path = require("path");
const pathInstruments = path.join(__dirname, '../database/instrumentsDB.json');
const pathSongs = path.join(__dirname, '../database/songsDB.json');
const pathUsers = path.join(__dirname, '../database/usersDB.json');
const pathFuncionesAuxiliares = path.join(__dirname, '../public/funcionesAuxiliares/productControllerAux.js');


const controlador = {
    instrumentDetail: (req, res) => {
        const instrumentos = JSON.parse(fs.readFileSync(pathInstruments));
        const instrumento = instrumentos.find(elemento => elemento.InstrumId == req.params.id);
        const relacionados = instrumentos.slice(1, 5) //Instrumentos relacionados

        res.render('product.ejs', {
            producto: instrumento,
            relacionados
        });

    },
    songDetail: (req, res) => {
        const songs = JSON.parse(fs.readFileSync(pathSongs));
        const song = songs.find(elemento => elemento.songId == req.params.id);
        const relacionados = songs.slice(1, 5) //Instrumentos relacionados
        res.render('product.ejs', {
            producto: song,
            relacionados
        });

    },
    artistDetail: (req, res) => { //FALTA HACER

    },
    //falta hacer la vista de usuario
    userDetail: (req, res) => {
        const songs = JSON.parse(fsreadFileSync(pathUsers));
        res.render('product.ejs', {
            user
        });
    },

    productempty: (req, res) => {
        res.render('productempty.ejs');
    },

    songempty: (req, res) => {
        res.render('songempty.ejs');
    },

    addSong: (req, res) => {
        const fs = require('fs');
        const songsDB = JSON.parse(fs.readFileSync(pathSongs, "UTF-8"));
        songcargar = {
            id: 25,
            /* Id usuario */
            songId: 1,
            /* Id canción */
            img: req.body.img,
            audioFile: req.body.song,
            titulo: req.body.titulo,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
        }
        songsDB.push(songcargar)
        fs.writeFileSync(pathSongs, JSON.stringify(songsDB))
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments));
        const usersDB = JSON.parse(fs.readFileSync(pathUsers));

        const instrumentos = instrumentsDB.slice(1, 7);
        const musicos = songsDB.slice(1, 7);

        const artistsDB = usersDB.filter(item => item.bio != "") //Los artistas son los que tienen bio
        const datos = artistsDB.slice(1, 5);

        res.render('tienda.ejs', {
            datos: datos,
            musicos: musicos,
            instrumentos: instrumentos
        })



    },

    tienda: (req, res) => {
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments));
        const songsDB = JSON.parse(fs.readFileSync(pathSongs));
        const usersDB = JSON.parse(fs.readFileSync(pathUsers));

        const instrumentos = instrumentsDB.slice(1, 7);
        const musicos = songsDB.slice(1, 7);

        const artistsDB = usersDB.filter(item => item.bio != "") //Los artistas son los que tienen bio
        const datos = artistsDB.slice(1, 5);

        res.render('tienda.ejs', {
            datos: datos,
            musicos: musicos,
            instrumentos: instrumentos
        });
    },
    songs: (req, res) => {
        const songsDB = JSON.parse(fs.readFileSync(pathSongs));
        const musicos = songsDB;
        res.render("allSongs.ejs", {
            musicos
        })
    },
    instruments: (req, res) => {
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments));
        const instrumentos = instrumentsDB;
        res.render("allInstruments.ejs", {
            instrumentos
        })
    },
    artists: (req, res) => {
        const usersDB = JSON.parse(fs.readFileSync(pathUsers));
        const artistsDB = usersDB.filter(item => item.bio != "") //Los artistas son los que tienen bio
        const artistas = artistsDB;
        res.render("allArtists.ejs", {
            artistas
        })
    },
    searched: (req, res) => { //Controlador para mostrar cuando se busca algo
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments));
        const songsDB = JSON.parse(fs.readFileSync(pathSongs));
        const usersDB = JSON.parse(fs.readFileSync(pathUsers));
        const artistsDB = usersDB.filter(item => item.bio != "") //Los artistas son los que tienen bio
        const auxiliares = require(pathFuncionesAuxiliares);

        const buscado = req.query.search
        const palabras = buscado.split(' ')
        const resultadosSongs = auxiliares.checkAtribute(songsDB, ["titulo", "descripcion", "nombre", "apellido"], palabras) //Canciones que coinciden
        const resultadosInstruments = auxiliares.checkAtribute(instrumentsDB, ["titulo", "descripcion"], palabras) //Instrumentos que coinciden
        const resultadosArtistas = auxiliares.checkAtribute(artistsDB, ["nombre", "apellido", "skills", "bio"], palabras) //Artistas que coinciden


        res.render("allSearched.ejs", {
            musicos: resultadosSongs,
            instrumentos: resultadosInstruments,
            artistas: resultadosArtistas
        })
    }
};


module.exports = controlador;