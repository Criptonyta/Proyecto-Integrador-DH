const fs = require('fs');
const path = require("path");
const pathInstruments = path.join(__dirname, '../database/instrumentsDB.json');
const pathSongs = path.join(__dirname, '../database/songsDB.json');
const pathUsers = path.join(__dirname, '../database/usersDB.json');
const pathFuncionesAuxiliares = path.join(__dirname, '../public/funcionesAuxiliares/productControllerAux.js');
const auxiliares = require(pathFuncionesAuxiliares);


const controlador = {
    instrumentDetail: (req, res) => {
        const usersDB = require(pathUsers)
        const instrumentos = JSON.parse(fs.readFileSync(pathInstruments));
        const instrumento = instrumentos.find(elemento => elemento.InstrumId == req.params.id);
        const relacionados = auxiliares.buscarNelementosRelacionados(instrumentos, "id", instrumento.id, 4) //Instrumentos relacionados
        const pathFotos = "/images/instrumentsImg/resizedandcropped/"
        const pathDetail = "/products/detailInstrument/"
        const nombreId = "InstrumId"
        const rutaDelete = "deleteinstrument"
        const artista = usersDB.find(elemento => elemento.id == instrumento.id);



        res.render('productinstrument.ejs', {
            producto: instrumento,
            relacionados,
            pathFotos,
            nombreId,
            pathDetail,
            nombreId,
            artista,
            rutaDelete
        });

    },
    songDetail: (req, res) => {
        const usersDB = require(pathUsers)
        const songs = JSON.parse(fs.readFileSync(pathSongs));
        const song = songs.find(elemento => elemento.songId == req.params.id);
        const relacionados = auxiliares.buscarNelementosRelacionados(songs, "id", song.id, 4) //Instrumentos relacionados
        const pathFotos = "/images/MusicFilesCoverImg/resized/"
        const pathDetail = "/products/detailSong/"
        const nombreId = "songId"
        const rutaDelete = "deletesong"
        const artista = usersDB.find(elemento => elemento.id == song.id);

        res.render('productsong.ejs', {
            producto: song,
            relacionados,
            pathFotos,
            pathDetail,
            nombreId,
            artista,
            rutaDelete
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
            id: 25, // TODO ACTIVAR CON SESSION
            /* Id usuario */
            songId: songsDB[songsDB.length - 1].songId + 1,
            /* Id canción */
            img: req.body.songEmptyImgBtn,
            audioFile: req.body.songEmptyFileBtn,
            titulo: req.body.titulo,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
        }

        songsDB.push(songcargar) // TODO SESSION + MULTER
        fs.writeFileSync(pathSongs, JSON.stringify(songsDB))
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments));
        const usersDB = JSON.parse(fs.readFileSync(pathUsers));

        const instrumentos = auxiliares.buscarNelementosAleatorios(instrumentsDB, 6);
        const musicos = auxiliares.buscarNelementosAleatorios(songsDB, 6);;

        const artistsDB = usersDB.filter(item => item.bio != "") //Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB, 3);;

        res.render('tienda.ejs', {
            datos: datos,
            musicos: musicos,
            instrumentos: instrumentos
        })



    },
    addProduct: (req, res) => {
        const fs = require('fs');
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments, "UTF-8"));
        instrumentcargar = {
            id: 12, //  TODO: ARREGLAR CON LA IMPLEMENTACION DE SESSION
            /* Id usuario */
            InstrumId: instrumentsDB[instrumentsDB.length - 1].InstrumId + 1,
            /* Id canción */
            img: req.body.productEmptyButton,
            titulo: req.body.titulo,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
        }


        instrumentsDB.push(instrumentcargar) // TODO SESSION + MULTER
        fs.writeFileSync(pathInstruments, JSON.stringify(instrumentsDB))
        const songsDB = JSON.parse(fs.readFileSync(pathSongs));
        const usersDB = JSON.parse(fs.readFileSync(pathUsers));

        const instrumentos = auxiliares.buscarNelementosAleatorios(instrumentsDB, 6);;
        const musicos = auxiliares.buscarNelementosAleatorios(songsDB, 6);;

        const artistsDB = usersDB.filter(item => item.bio != "") //Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB, 3);;

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

        const instrumentos = auxiliares.buscarNelementosAleatorios(instrumentsDB, 6);
        const musicos = auxiliares.buscarNelementosAleatorios(songsDB, 6);

        const artistsDB = usersDB.filter(item => item.bio != "") //Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB, 3);;

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
    },
    deleteInstrument: (req, res) => {
        const instrumentDB = JSON.parse(fs.readFileSync(pathInstruments, "utf-8"))
        const resultado = instrumentDB.filter(instrumento => instrumento.InstrumId != req.params.idInstrum)
        fs.writeFileSync(pathInstruments, JSON.stringify(resultado))

        const songsDB = JSON.parse(fs.readFileSync(pathSongs));
        const usersDB = JSON.parse(fs.readFileSync(pathUsers));

        const instrumentos = auxiliares.buscarNelementosAleatorios(resultado, 6);;
        const musicos = auxiliares.buscarNelementosAleatorios(songsDB, 6);;

        const artistsDB = usersDB.filter(item => item.bio != "") //Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB, 3);;

        res.render('tienda.ejs', {
            datos: datos,
            musicos: musicos,
            instrumentos: instrumentos
        });

    },
    deleteSong: (req, res) => {
        const songsDB = JSON.parse(fs.readFileSync(pathSongs, "utf-8"))
        const resultado = songsDB.filter(song => song.songId != req.params.idSong)
        fs.writeFileSync(pathSongs, JSON.stringify(resultado))

        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments));
        const usersDB = JSON.parse(fs.readFileSync(pathUsers));

        const instrumentos = auxiliares.buscarNelementosAleatorios(instrumentsDB, 6);;
        const musicos = auxiliares.buscarNelementosAleatorios(resultado, 6);;

        const artistsDB = usersDB.filter(item => item.bio != "") //Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB, 3);;

        res.render('tienda.ejs', {
            datos: datos,
            musicos: musicos,
            instrumentos: instrumentos
        });

    },
    editSong: (req, res) => {
        const songsDB = JSON.parse(fs.readFileSync(pathSongs));
        for (let i = 0; i < songsDB.length; i++) {
            if (songsDB[i].songId == req.params.idSong) {
                let songOld = songsDB[i];
                res.render('editSong.ejs', {
                    songOld
                });
            }
        }

    },
    editInstrument: (req, res) => {
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments));
        for (let i = 0; i < instrumentsDB.length; i++) {
            if (instrumentsDB[i].InstrumId == req.params.idInstrum) {
                let instrumentoOld = instrumentsDB[i];
                res.render('editProduct.ejs', {
                    instrumentoOld
                });
            }
        }
    },
    editSongPut: (req, res) => {
        const songsDB = JSON.parse(fs.readFileSync(pathSongs, "utf-8"));
        const oldProduct = songsDB.filter(elements => elements.songId == req.params.idSong)

        for (let i = 0; i < songsDB.length; i++) {
            if (songsDB[i].songId == req.params.idSong) {
                songsDB[i].titulo = req.body.titulo;
                songsDB[i].descripcion = req.body.descripcion;
                songsDB[i].precio = req.body.precio;
                if (req.body.songEmptyImgBtn == "") {
                    songsDB[i].img = oldProduct[0].img
                } else {
                    songsDB[i].img = req.body.songEmptyImgBtn
                }
                if (req.body.songEmptyFileBtn == "") {
                    songsDB[i].audioFile = oldProduct[0].audioFile
                } else {
                    songsDB[i].audioFile = req.body.songEmptyFileBtn
                }

            }
        }
        fs.writeFileSync(pathSongs, JSON.stringify(songsDB))
        res.render("allSongs.ejs", {
            musicos: songsDB
        })

    },

    editInstrumentPut: (req, res) => {
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments, "utf-8"));
        const oldProduct = instrumentsDB.filter(elements => elements.InstrumId == req.params.idInstrum)

        for (let i = 0; i < instrumentsDB.length; i++) {
            if (instrumentsDB[i].InstrumId == req.params.idInstrum) {
                instrumentsDB[i].titulo = req.body.titulo;
                instrumentsDB[i].descripcion = req.body.descripcion;
                instrumentsDB[i].precio = req.body.precio;
                if (req.body.productEmptyButton == "") {
                    instrumentsDB[i].img = oldProduct[0].img
                } else {
                    instrumentsDB[i].img = req.body.productEmptyButton
                }
            }
        }
        fs.writeFileSync(pathInstruments, JSON.stringify(instrumentsDB))
        res.render("allInstruments.ejs", {
            instrumentos: instrumentsDB
        })
    },
};


module.exports = controlador;