const fs = require ('fs');
const path = require ("path");

const {usersModel} = require("../models/index")//Importamos los models
const pathFuncionesAuxiliares = path.join(__dirname, '../public/funcionesAuxiliares/mainControllerAux.js');
const auxiliares = require(pathFuncionesAuxiliares);

const controlador = {
    home: (req, res) => {
        const artistsDB = usersModel.findArtists()//Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB,"id",3);
        res.render('home.ejs',{datos:datos});
    }

};


module.exports = controlador;