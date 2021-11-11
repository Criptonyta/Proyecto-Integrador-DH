const fs = require('fs');
const path = require("path");

const {
    usersModel
} = require("../models/index") //Importamos los models
const pathFuncionesAuxiliares = path.join(__dirname, '../public/funcionesAuxiliares/mainControllerAux.js');
const auxiliares = require(pathFuncionesAuxiliares);

const controlador = {
    home: async (req, res) => {
        try {
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

            res.render('home.ejs', {
                datos: datos
            });
        } catch (e) {
            console.log('error buscando y presentando los artistas')
        }
    }
};


module.exports = controlador;