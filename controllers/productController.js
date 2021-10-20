const fs = require('fs');
const path = require("path");

const {
    instrumentsModel,
    songsModel,
    usersModel
} = require("../models/index"); //Importamos los models
const instrumentModel = require('../models/instrumentsModel');
const pathFuncionesAuxiliares = path.join(__dirname, '../public/funcionesAuxiliares/productControllerAux.js');
const auxiliares = require(pathFuncionesAuxiliares);


const controlador = {
    instrumentDetail: (req, res) => {
        try{
            const usersDB = usersModel.getAll()
            const instrumentos = instrumentsModel.getAll()
            const instrumento = instrumentsModel.findInstrument(req.params.id)
            const relacionados = auxiliares.buscarNelementosRelacionados(instrumentos, "id", instrumento.id, "InstrumId", req.params.id, 3) //Instrumentos relacionados
            const pathFotos = "/images/instrumentsImg/resizedandcropped/" //Donde guardamos las fotos
            const pathDetail = "/products/detailInstrument/" //Ruta al detalle del producto
            const nombreId = "InstrumId" //Id de los instrumentos
            const rutaDelete = "deleteinstrument" //Donde eliminamos los productos
            const artista = usersModel.findUser(instrumento.id)

            //Creamos la variable locals para usar en la vista
            if (req.session !=  undefined){
                res.locals.idusuario = req.session.userLogged.id
            }
            else{
                res.locals.idusuario = req.cookie.recordame.id
            }
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
        }
        catch(error){
            res.render("error404")
        }
    },
    songDetail: (req, res) => {
        try{
            const usersDB = usersModel.getAll()
            const songs = songsModel.getAll()
            const song = songsModel.findSong(req.params.id)
            const relacionados = auxiliares.buscarNelementosRelacionados(songs, "id", song.id, "songId", req.params.id, 3) //Instrumentos relacionados
            const pathFotos = "/images/MusicFilesCoverImg/resized/" //Donde guardamos las fotos
            const pathDetail = "/products/detailSong/" //Donde esta el detalle
            const nombreId = "songId" //Id de las canciones
            const rutaDelete = "deletesong" //Donde se borra la cancion
            const artista = usersModel.findUser(song.id)

            //Creamos la variable locals para usar en la vista
            if (req.session !=  undefined){
                res.locals.idusuario = req.session.userLogged.id
            }
            else{
                res.locals.idusuario = req.cookie.recordame.id
            }

            res.render('productsong.ejs', {
                producto: song,
                relacionados,
                pathFotos,
                pathDetail,
                nombreId,
                artista,
                rutaDelete
            });
        }
        catch(error){
            res.render("error404")
        }
    },
    productempty: (req, res) => {
        res.render('productempty.ejs');
    },
    songempty: (req, res) => {
        res.render('songempty.ejs');
    },
    addSong: (req, res) => {
        const songsDB = songsModel.getAll()
        songcargar = {
            id: req.session.userLogged.id,
            img: req.files.songEmptyContentBtn1[0].filename, //Imagen de la cancion
            audioFile: req.files.songEmptyContentBtn2[0].filename, //Nombre del MP3
            audioFileYTPlayer: "kNYx2C995fc", //TODO CREAR MODAL=> "TU CANCION ESTA SIENDO REVISADA" 
            YT_URL: "https://youtu.be/", //TODO URL a youtube (sera un proceso manual del administrador)
            titulo: req.body.titulo, //Titulo de la cancion
            precio: req.body.precio, //Precio de la cancion
            descripcion: req.body.descripcion, //Descripcion de la cancion
            nombre: usersModel.findUser(req.session.userLogged.id)["nombre"],
            apellido: usersModel.findUser(req.session.userLogged.id)["apellido"]
        }
        songsModel.agregarCancion(songcargar)
        res.redirect("/products/tienda/")
    },
    addProduct: (req, res) => {
        const instrumentsDB = instrumentsModel.getAll()
        console.log(req.files)
        instrumentcargar = {
            id: req.session.userLogged.id,
            img: req.files.productEmptyButton[0].filename,
            titulo: req.body.titulo,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
        }
        instrumentsModel.agregarInstrumento(instrumentcargar)
        res.redirect("/products/tienda/")
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
        res.redirect("/products/tienda/")
    },
    deleteSong: (req, res) => {
        songsModel.borrarCancion(req.params.idSong)
        res.redirect("/products/tienda/")
    },
    editSong: (req, res) => {
        let songOld = songsModel.findSong(req.params.idSong)
        res.render('editSong.ejs', {songOld});
    },
    editInstrument: (req, res) => {
        let instrumentoOld = instrumentModel.findInstrument(req.params.idInstrum)
        res.render('editProduct.ejs', {instrumentoOld});
    },
    editSongPut: (req, res) => {
        const songsDB = songsModel.getAll()
        const oldProduct = songsModel.findSong(req.params.idSong)
        if (req.files.songEmptyContentBtn1 && req.files.songEmptyContentBtn2) { //CASO SI TIENE FOTO Y VIDEO
            const editSong = {
                img: req.files.songEmptyContentBtn1[0].filename,
                titulo: req.body.titulo,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                audioFileYTPlayer: "Cmzuaozboms", //CAMBIAR!
                audioFile: req.files.songEmptyContentBtn2[0].filename,
                YT_URL: "https://youtu.be/Cmzuaozboms", //CAMBIAR
            }
            songsModel.editarCancion(oldProduct, editSong)
            res.redirect("/products/tienda/songs/")
        } else if (req.files.songEmptyContentBtn1) { //CASO SI TIENE FOTO
            const editSong = {
                img: req.files.songEmptyContentBtn1[0].filename,
                titulo: req.body.titulo,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                audioFileYTPlayer: "Cmzuaozboms", //CAMBIAR!
                YT_URL: "https://youtu.be/Cmzuaozboms", //CAMBIAR
            }
            songsModel.editarCancion(oldProduct, editSong)
            res.redirect("/products/tienda/songs/")
        } else if (req.files.songEmptyContentBtn2) { //CASO SI TIENE VIDEO
            const editSong = {
                titulo: req.body.titulo,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                audioFileYTPlayer: "Cmzuaozboms", //CAMBIAR!
                audioFile: req.files.songEmptyContentBtn2[0].filename,
                YT_URL: "https://youtu.be/Cmzuaozboms", //CAMBIAR
            }
            songsModel.editarCancion(oldProduct, editSong)
            res.redirect("/products/tienda/songs/")

        } else {
            const editSong = { //CASO NI FOTO NI VIDEO
                titulo: req.body.titulo,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                audioFileYTPlayer: "Cmzuaozboms", //CAMBIAR!
                YT_URL: "https://youtu.be/Cmzuaozboms", //CAMBIAR
            }
            songsModel.editarCancion(oldProduct, editSong)
            res.redirect("/products/tienda/songs/")
        }
    },
    editInstrumentPut: (req, res) => {
        const instrumentsDB = instrumentsModel.getAll()
        const oldProduct = instrumentsModel.findInstrument(req.params.idInstrum)
        if (typeof req.files == "object" && req.files.productEmptyButton) { //Si tiene req.files es porque le mande una foto
            const editInstrument = {
                img: req.files.productEmptyButton[0].filename,
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
            }
            instrumentsModel.editarInstrumento(oldProduct, editInstrument)
            res.redirect("/products/tienda/instruments/")

        } else {
            const editInstrument = {
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
            }
            instrumentsModel.editarInstrumento(oldProduct, editInstrument)
            res.redirect("/products/tienda/instruments/")
        }
    },
};

module.exports = controlador;