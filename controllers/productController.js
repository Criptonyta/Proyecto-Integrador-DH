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
const {
    validationResult
} = require("express-validator")


const controlador = {
    instrumentDetail: async (req, res) => {
        try {
            const usersDB = await usersModel.getAll()
            const instrumentos = await instrumentsModel.getAll()
            const instrumento = await instrumentsModel.findInstrument(req.params.id)
            const relacionados = auxiliares.buscarNelementosRelacionados(instrumentos, "id", instrumento.id, "InstrumId", req.params.id, 3) //Instrumentos relacionados
            const pathFotos = "/images/instrumentsImg/resizedandcropped/" //Donde guardamos las fotos
            const pathDetail = "/products/detailInstrument/" //Ruta al detalle del producto
            const nombreId = "InstrumId" //Id de los instrumentos
            const rutaDelete = "deleteinstrument" //Donde eliminamos los productos
            const artista = await usersModel.findUser(instrumento.id)


            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
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
        } catch (error) {
            res.render("error404")
        }
    },
    songDetail: async (req, res) => {
        try {
            const usersDB = await usersModel.getAll()
            const songs = await songsModel.getAll()
            const song = await songsModel.findSong(req.params.id)
            const relacionados = await auxiliares.buscarNelementosRelacionados(songs, "id", song.id, "songId", req.params.id, 3) //Instrumentos relacionados
            const pathFotos = "/images/MusicFilesCoverImg/resized/" //Donde guardamos las fotos
            const pathDetail = "/products/detailSong/" //Donde esta el detalle
            const nombreId = "songId" //Id de las canciones
            const rutaDelete = "deletesong" //Donde se borra la cancion
            const artista = await usersModel.findUser(song.id)

            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
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
        } catch (error) {
            res.render("error404")
        }
    },
    productempty: (req, res) => {
        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged == undefined) {
            res.locals.idusuario = "noLogueado"
        } else if (req.session != undefined) {
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        } else {
            res.locals.idusuario = req.cookie.recordame.id
        }

        res.render('productempty.ejs');
    },
    songempty: (req, res) => {
        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged == undefined) {
            res.locals.idusuario = "noLogueado"
        } else if (req.session != undefined) {
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        } else {
            res.locals.idusuario = req.cookie.recordame.id
        }

        res.render('songempty.ejs');
    },
    addSong: async (req, res) => {
        try {
            const errores = validationResult(req)
            if (!errores.isEmpty()) {
                //Creamos la variable locals para usar en la vista
                if (req.session.userLogged == undefined) {
                    res.locals.idusuario = "noLogueado"
                } else if (req.session != undefined) {
                    res.locals.idusuario = req.session.userLogged.id;
                    res.locals.nombre = req.session.userLogged.nombre;
                } else {
                    res.locals.idusuario = req.cookie.recordame.id
                }
                return res.render('songempty.ejs', {
                    errors: errores.array(),
                    oldData: req.body
                })
            }
            songcargar = {
                id: req.session.userLogged.id,
                img: req.files.songEmptyContentBtn1[0].filename, //Imagen de la cancion
                audioFile: req.files.songEmptyContentBtn2[0].filename, //Nombre del MP3
                audioFileYTPlayer: "kNYx2C995fc", //TODO CREAR MODAL=> "TU CANCION ESTA SIENDO REVISADA" 
                YT_URL: "https://youtu.be/", //TODO URL a youtube (sera un proceso manual del administrador)
                titulo: req.body.titulo, //Titulo de la cancion
                precio: req.body.precio, //Precio de la cancion
                descripcion: req.body.descripcion, //Descripcion de la cancion
                tipoProducto: 'cancion'
            }
            await songsModel.agregarCancion(songcargar)
            res.redirect("/products/tienda/")
        } catch (e) {
            console.log('error agregando la cancion')
        }
    },
    addProduct: async (req, res) => {
        try {
            const errores = validationResult(req)
            if (!errores.isEmpty()) {
                //Creamos la variable locals para usar en la vista
                if (req.session.userLogged == undefined) {
                    res.locals.idusuario = "noLogueado"
                } else if (req.session != undefined) {
                    res.locals.idusuario = req.session.userLogged.id;
                    res.locals.nombre = req.session.userLogged.nombre;
                } else {
                    res.locals.idusuario = req.cookie.recordame.id
                }
                return res.render('productempty.ejs', {
                    errors: errores.array(),
                    oldData: req.body
                })
            }
            const instrumentsDB = await instrumentsModel.getAll()
            instrumentcargar = {
                id: req.session.userLogged.id,
                img: req.files.productEmptyButton[0].filename,
                titulo: req.body.titulo,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                tipoProducto: 'instrum',
            }
            await instrumentsModel.agregarInstrumento(instrumentcargar)
            res.redirect("/products/tienda/")
        } catch (e) {
            console.log('error agregando el producto')
        }
    },


    tienda: async (req, res) => {
        try {
            const instrumentsDB = await instrumentsModel.getAll()
            const songsDB = await songsModel.getAll()
            const instrumentos = await auxiliares.buscarNelementosAleatorios(instrumentsDB, "InstrumId", 6);
            const musicos = await auxiliares.buscarNelementosAleatorios(songsDB, "songId", 6);
            const artistsDB = await usersModel.findArtists() //Los artistas son los que tienen bio
            const datos = await auxiliares.buscarNelementosAleatorios(artistsDB, "id", 3);

            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
                res.locals.idusuario = req.cookie.recordame.id
            }
            res.render('tienda.ejs', {
                datos: datos,
                musicos: musicos,
                instrumentos: instrumentos
            })
        } catch (e) {
            console.log('error renderizando los elementos')
        }
    },

    songs: async (req, res) => {
        try {
            const songsDB = await songsModel.getAll()

            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
                res.locals.idusuario = req.cookie.recordame.id
            }

            res.render("allSongs.ejs", {
                musicos: songsDB
            })
        } catch (e) {
            console.log('error renderizando las canciones')
        }
    },
    instruments: async (req, res) => {
        try {
            const instrumentsDB = await instrumentsModel.getAll()

            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
                res.locals.idusuario = req.cookie.recordame.id
            }

            res.render("allInstruments.ejs", {
                instrumentos: instrumentsDB
            })
        } catch (e) {
            console.log('error renderizando los productos')
        }
    },
    artists: async (req, res) => {
        try {
            const artistsDB = await usersModel.findArtists() //Los artistas son los que tienen bio

            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
                res.locals.idusuario = req.cookie.recordame.id
            }

            res.render("allArtists.ejs", {
                artistas: artistsDB
            })
        } catch (e) {
            console.log('error renderizando los artistas')
        }
    },
    searched: async (req, res) => { //Controlador para mostrar cuando se busca algo
        try {
            const instrumentsDB = await instrumentsModel.getAll()
            const songsDB = await songsModel.getAll()
            const artistsDB = await usersModel.findArtists() //Los artistas son los que tienen bio

            const buscado = req.query.search
            const palabras = buscado.split(' ')
            const resultadosSongs = auxiliares.checkAtribute(songsDB, ["titulo", "descripcion"], palabras) //Canciones que coinciden
            const resultadosInstruments = auxiliares.checkAtribute(instrumentsDB, ["titulo", "descripcion"], palabras) //Instrumentos que coinciden
            const resultadosArtistas = auxiliares.checkAtribute(artistsDB, ["nombre", "apellido", "skills", "bio"], palabras) //Artistas que coinciden

            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
                res.locals.idusuario = req.cookie.recordame.id
            }

            res.render("allSearched.ejs", {
                musicos: resultadosSongs,
                instrumentos: resultadosInstruments,
                artistas: resultadosArtistas
            })
        } catch (e) {
            console.log('error de buscado')
        }
    },
    deleteInstrument: async (req, res) => {
        try {
            await instrumentsModel.borrarInstrumento(req.params.idInstrum) //Borramos el instrumento
            res.redirect("/products/tienda/")
        } catch (e) {
            console.log('error de borrado de los productos')
        }
    },
    deleteSong: async (req, res) => {
        try {
            await songsModel.borrarCancion(req.params.idSong)
            res.redirect("/products/tienda/")
        } catch {
            console.log('error de borrado de las canciones')
        }
    },
    editSong: async (req, res) => {
        try {
            let songOld = await songsModel.findSong(req.params.idSong)

            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
                res.locals.idusuario = req.cookie.recordame.id
            }
            res.render('editSong.ejs', {
                songOld
            })
        } catch {
            console.log('error editando las canciones')
        }
    },

    editInstrument: async (req, res) => {
        try {
            let instrumentoOld = await instrumentModel.findInstrument(req.params.idInstrum)

            //Creamos la variable locals para usar en la vista
            if (req.session.userLogged == undefined) {
                res.locals.idusuario = "noLogueado"
            } else if (req.session != undefined) {
                res.locals.idusuario = req.session.userLogged.id;
                res.locals.nombre = req.session.userLogged.nombre;
            } else {
                res.locals.idusuario = req.cookie.recordame.id
            }
            res.render('editProduct.ejs', {
                instrumentoOld
            })
        } catch (e) {
            console.log('error editando los productos')
        };
    },
    editSongPut: async (req, res) => {
        try {
            const errores = validationResult(req)
            if (!errores.isEmpty()) {
                //Creamos la variable locals para usar en la vista
                if (req.session.userLogged == undefined) {
                    res.locals.idusuario = "noLogueado"
                } else if (req.session != undefined) {
                    res.locals.idusuario = req.session.userLogged.id;
                    res.locals.nombre = req.session.userLogged.nombre;
                } else {
                    res.locals.idusuario = req.cookie.recordame.id
                }
                let songold = await songsModel.findSong(req.params.idSong)
                return res.render('editSong.ejs', {
                    errors: errores.array(),
                    songOld: songold
                })
            }
            const songsDB = await songsModel.getAll()
            const oldProduct = await songsModel.findSong(req.params.idSong)
            const editSong = {
                titulo: req.body.titulo,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                audioFileYTPlayer: "Cmzuaozboms", //TODO CAMBIAR!
                YT_URL: "https://youtu.be/Cmzuaozboms", //TODO CAMBIAR
            }
            if (req.files.songEmptyContentBtn1) {
                editSong.img = req.files.songEmptyContentBtn1[0].filename
            } else {
                editSong.img = oldProduct.img
            }
            if (req.files.songEmptyContentBtn2) {
                editSong.audioFile = req.files.songEmptyContentBtn2[0].filename
            } else {
                editSong.audioFile = oldProduct.audioFile
            }
            songsModel.editarCancion(editSong, oldProduct.songId)
            res.redirect("/products/tienda/songs/")
        } catch (e) {
            console.log('error editando las canciones')
        }
    },
    editInstrumentPut: async (req, res) => {
        try {
            const errores = validationResult(req)
            if (!errores.isEmpty()) {
                //Creamos la variable locals para usar en la vista
                if (req.session.userLogged == undefined) {
                    res.locals.idusuario = "noLogueado"
                } else if (req.session != undefined) {
                    res.locals.idusuario = req.session.userLogged.id;
                    res.locals.nombre = req.session.userLogged.nombre;
                } else {
                    res.locals.idusuario = req.cookie.recordame.id
                }
                let instrumentoold = await instrumentModel.findInstrument(req.params.idInstrum)
                return res.render('editProduct.ejs', {
                    errors: errores.array(),
                    instrumentoOld: instrumentoold
                })
            }
            const oldProduct = await instrumentsModel.findInstrument(req.params.idInstrum)
            const instrumentsDB = await instrumentsModel.getAll()
            const editInstrument = {
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
            }
            if (typeof req.files == "object" && req.files.productEmptyButton) {
                editInstrument.img = req.files.productEmptyButton[0].filename
            } else {
                editInstrument.img = oldProduct.img
            }
            // if (newData.img) {
            //     instrumentsDB[i].img = newData.img
            // }

            await instrumentsModel.editarInstrumento(editInstrument, oldProduct.id)
            res.redirect("/products/tienda/instruments/")
        } catch (e) {
            console.log('error editando productos')
        }
    },
    apiProdList: async (req, res) => { // API PARA TODOS LOS PRODUCTOS
        try {
            await instrumentsModel.getAll()
                .then(resultApiProduct => {
                    return res.status(200).json({
                        total: resultApiProduct.length,
                        totalxcategoria: resultApiProduct.length,
                        // url: 'products/detailInstrument/' +: InstrumId, TODO PRESENTAR URL DETALLE
                        data: resultApiProduct,
                        status: 200
                    })
                })
        } catch (error) {
            return res.status(500).json({
                total: 0,
                data: [],
                status: 500
            })
        }
    },
    apiProdItem: async (req, res) => { // API PARA 1 PRODUCTO
        try {
            await instrumentsModel.findInstrument(req.params.id)
                .then(resultApiProdItem => {
                    return res.status(200).json({
                        // TODO  un array por cada relaci??n de uno a muchos (categories, colors, etc).
                        // url: 'products/detailInstrument/' +: InstrumId, TODO PRESENTAR URL CON IMG
                        data: resultApiProdItem,
                        status: 200
                    })
                })
        } catch (error) {
            return res.status(500).json({
                total: 0,
                data: [],
                status: 500
            })
        }
    },

    apiSongList: async (req, res) => { // API PARA TODAS LAS CANCIONES
        try {
            await songsModel.getAll()
                .then(resultApiSongs => {
                    return res.status(200).json({
                        total: resultApiSongs.length,
                        totalxcategoria: resultApiSongs.length,
                        // url: 'products/detailInstrument/' +: InstrumId, TODO PRESENTAR URL DETALLE
                        data: resultApiSongs,
                        status: 200
                    })
                })
        } catch (error) {
            return res.status(500).json({
                total: 0,
                data: [],
                status: 500
            })
        }
    },
    apiSongItem: async (req, res) => { // API PARA 1 CANCION
        try {
            await songsModel.findSong(req.params.id)
                .then(resultApiSongItem => {
                    return res.status(200).json({
                        // TODO  un array por cada relaci??n de uno a muchos (categories, colors, etc).
                        // url: 'products/detailInstrument/' +: InstrumId, TODO PRESENTAR URL CON IMG
                        data: resultApiSongItem,
                        status: 200
                    })
                })
        } catch (error) {
            return res.status(500).json({
                total: 0,
                data: [],
                status: 500
            })
        }
    }
};

module.exports = controlador;