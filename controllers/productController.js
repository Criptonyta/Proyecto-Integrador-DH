const fs = require('fs');
const path = require("path");
const multer = require('multer');

const {instrumentsModel,songsModel,usersModel} = require("../models/index"); //Importamos los models
const pathFuncionesAuxiliares = path.join(__dirname, '../public/funcionesAuxiliares/productControllerAux.js');
const auxiliares = require(pathFuncionesAuxiliares);


const controlador = {
    instrumentDetail: (req, res) => {
        const usersDB = usersModel.getAll()
        const instrumentos = instrumentsModel.getAll()
        const instrumento = instrumentsModel.findInstrument(req.params.id)
        const relacionados = auxiliares.buscarNelementosRelacionados(instrumentos, "id", instrumento.id, "InstrumId", req.params.id, 3) //Instrumentos relacionados
        const pathFotos = "/images/instrumentsImg/resizedandcropped/" //Donde guardamos las fotos
        const pathDetail = "/products/detailInstrument/" //Ruta al detalle del producto
        const nombreId = "InstrumId" //Id de los instrumentos
        const rutaDelete = "deleteinstrument" //Donde eliminamos los productos
        const artista = usersModel.findUser(instrumento.id)

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
        const usersDB = usersModel.getAll()
        const songs = songsModel.getAll()
        const song = songsModel.findSong(req.params.id)
        const relacionados = auxiliares.buscarNelementosRelacionados(songs, "id", song.id, "songId", req.params.id, 3) //Instrumentos relacionados
        const pathFotos = "/images/MusicFilesCoverImg/resized/" //Donde guardamos las fotos
        const pathDetail = "/products/detailSong/" //Donde esta el detalle
        const nombreId = "songId" //Id de las canciones
        const rutaDelete = "deletesong" //Donde se borra la cancion
        const artista = usersModel.findUser(song.id)

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
        const songsDB = songsModel.getAll()
        console.log(req.files)
        songcargar = {
            id: 25, // TODO ACTIVAR CON SESSION /* Id usuario */
            img: req.files.songEmptyContentBtn1[0].filename, //Imagen de la cancion
            audioFile: req.files.songEmptyContentBtn2[0].filename, //Nombre del MP3
            audioFileYTPlayer: "kNYx2C995fc", //TODO Codigo en la cancion de youtube CAMBIAR!
            YT_URL: "https://youtu.be/", //TODO URL a youtube
            titulo: req.body.titulo, //Titulo de la cancion
            precio: req.body.precio, //Precio de la cancion
            descripcion: req.body.descripcion, //Descripcion de la cancion
            nombre: usersModel.findUser(25)["nombre"], //SESSION
            apellido: usersModel.findUser(25)["apellido"] //SESSION
        }
        // TODO SESSION
        songsModel.agregarCancion(songcargar)

        const instrumentsDB = instrumentsModel.getAll() //Todos los instrumentos
        const instrumentos = auxiliares.buscarNelementosAleatorios(instrumentsDB, "InstrumId", 6);
        const musicos = auxiliares.buscarNelementosAleatorios(songsDB, "songId", 6);;
        const artistsDB = usersModel.findArtists() //Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB, "id", 3);;

        res.render('tienda.ejs', {
            datos: datos,
            musicos: musicos,
            instrumentos: instrumentos
        })
    },
    addProduct: (req, res) => {
        const instrumentsDB = instrumentsModel.getAll()
        instrumentcargar = {
            id: 12, //  TODO: ARREGLAR CON LA IMPLEMENTACION DE SESSION/* Id usuario */
            img: req.body.productEmptyButton,
            titulo: req.body.titulo,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
        }
        instrumentsModel.agregarInstrumento(instrumentcargar)

        const songsDB = songsModel.getAll()
        const instrumentos = auxiliares.buscarNelementosAleatorios(instrumentsDB, "InstrumId", 6);;
        const musicos = auxiliares.buscarNelementosAleatorios(songsDB, "songId", 6);;
        const artistsDB = usersModel.findArtists() //Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB, "id", 3);;

        res.render('tienda.ejs', {
            datos: datos,
            musicos: musicos,
            instrumentos: instrumentos
        })
    },
    tienda: (req, res) => {
        const instrumentsDB = instrumentsModel.getAll()
        const songsDB = songsModel.getAll()
        const instrumentos = auxiliares.buscarNelementosAleatorios(instrumentsDB, "InstrumId", 6);
        const musicos = auxiliares.buscarNelementosAleatorios(songsDB, "songId", 6);
        const artistsDB = usersModel.findArtists() //Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB, "id", 3);;

        res.render('tienda.ejs', {
            datos: datos,
            musicos: musicos,
            instrumentos: instrumentos
        });
    },
    songs: (req, res) => {
        const songsDB = songsModel.getAll()
        res.render("allSongs.ejs", {
            musicos: songsDB
        })
    },
    instruments: (req, res) => {
        const instrumentsDB = instrumentsModel.getAll()
        res.render("allInstruments.ejs", {
            instrumentos: instrumentsDB
        })
    },
    artists: (req, res) => {
        const artistsDB = usersModel.findArtists() //Los artistas son los que tienen bio
        res.render("allArtists.ejs", {
            artistas: artistsDB
        })
    },
    searched: (req, res) => { //Controlador para mostrar cuando se busca algo
        const instrumentsDB = instrumentsModel.getAll()
        const songsDB = songsModel.getAll()
        const artistsDB = usersModel.findArtists() //Los artistas son los que tienen bio

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
        instrumentsModel.borrarInstrumento(req.params.idInstrum) //Borramos el instrumento

        const songsDB = songsModel.getAll()
        const instrumentos = auxiliares.buscarNelementosAleatorios(instrumentsModel.getAll(), "InstrumId", 6);;
        const musicos = auxiliares.buscarNelementosAleatorios(songsDB, "songId", 6);;

        const artistsDB = usersModel.findArtists() //Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB, "id", 3);;

        res.render('tienda.ejs', {
            datos: datos,
            musicos: musicos,
            instrumentos: instrumentos
        });
    },
    deleteSong: (req, res) => {
        songsModel.borrarCancion(req.params.idSong)

        const instrumentsDB = instrumentsModel.getAll()
        const instrumentos = auxiliares.buscarNelementosAleatorios(instrumentsDB, "InstrumId", 6);;
        const musicos = auxiliares.buscarNelementosAleatorios(songsModel.getAll(), "songId", 6);;
        const artistsDB = usersModel.findArtists() //Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB, "id", 3);;

        res.render('tienda.ejs', {
            datos: datos,
            musicos: musicos,
            instrumentos: instrumentos
        });
    },
    editSong: (req, res) => {
        const songsDB = songsModel.getAll()
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
        const instrumentsDB = instrumentsModel.getAll()
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
        const songsDB = songsModel.getAll()
        const oldProduct = songsModel.findSong(req.params.idSong)

        const editSong = {
            img: req.file.originalname, //Imagen de la cancion
            titulo: req.body.titulo,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            audioFileYTPlayer: "Cmzuaozboms", //CAMBIAR!
            audioFile: req.body.songEmptyFileBtn,
            YT_URL: "https://youtu.be/Cmzuaozboms", //CAMBIAR
        }
        songsModel.editarCancion(oldProduct, editSong)

        res.render("allSongs.ejs", {
            musicos: songsDB
        })
    },
    editInstrumentPut: (req, res) => {
        const instrumentsDB = instrumentsModel.getAll()
        const oldProduct = instrumentsModel.findInstrument(req.params.idInstrum)

        const editInstrument = {
            img: req.body.productEmptyButton,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
        }
        instrumentsModel.editarInstrumento(oldProduct, editInstrument)
        res.render("allInstruments.ejs", {
            instrumentos: instrumentsDB
        })
    },
};

module.exports = controlador;