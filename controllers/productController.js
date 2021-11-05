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
            if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
            else if (req.session !=  undefined){
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            }
            else{res.locals.idusuario = req.cookie.recordame.id}

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
            if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
            else if (req.session !=  undefined){
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            }
            else{res.locals.idusuario = req.cookie.recordame.id}

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
        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}

        res.render('productempty.ejs');
    },
    songempty: (req, res) => {
        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}

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
        }
        songsModel.agregarCancion(songcargar)
        res.redirect("/products/tienda/")
    },
    addProduct: (req, res) => {
        const instrumentsDB = instrumentsModel.getAll()
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
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB, "id", 3);
        
        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}


        res.render('tienda.ejs', {
            datos: datos,
            musicos: musicos,
            instrumentos: instrumentos
        });
    },
    songs: (req, res) => {
        const songsDB = songsModel.getAll()

        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}
        
        res.render("allSongs.ejs", {
            musicos: songsDB
        })
    },
    instruments: (req, res) => {
        const instrumentsDB = instrumentsModel.getAll()

        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}

        res.render("allInstruments.ejs", {
            instrumentos: instrumentsDB
        })
    },
    artists: (req, res) => {
        const artistsDB = usersModel.findArtists() //Los artistas son los que tienen bio

        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}

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

        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}

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

        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}
        res.render('editSong.ejs', {songOld});
    },
    editInstrument: (req, res) => {
        let instrumentoOld = instrumentModel.findInstrument(req.params.idInstrum)
        
        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}
        res.render('editProduct.ejs', {instrumentoOld});
    },
    editSongPut: (req, res) => {
        const songsDB = songsModel.getAll()
        const oldProduct = songsModel.findSong(req.params.idSong)
        const editSong = {
            titulo: req.body.titulo,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            audioFileYTPlayer: "Cmzuaozboms", //CAMBIAR!
            YT_URL: "https://youtu.be/Cmzuaozboms", //CAMBIAR
        }
        if (req.files.songEmptyContentBtn1){editSong.img = req.files.songEmptyContentBtn1[0].filename}
        if (req.files.songEmptyContentBtn2){editSong.audioFile = req.files.songEmptyContentBtn2[0].filename}
        songsModel.editarCancion(oldProduct, editSong)
        res.redirect("/products/tienda/songs/")
    },
    editInstrumentPut: (req, res) => {
        const instrumentsDB = instrumentsModel.getAll()
        const oldProduct = instrumentsModel.findInstrument(req.params.idInstrum)
        const editInstrument = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
        }
        if (typeof req.files == "object" && req.files.productEmptyButton){editInstrument.img = req.files.productEmptyButton[0].filename}
        instrumentsModel.editarInstrumento(oldProduct, editInstrument)
        res.redirect("/products/tienda/instruments/")
    },
};

module.exports = controlador;