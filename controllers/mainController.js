const fs = require ('fs');
const path = require ("path");

const {instrumentsModel,songsModel,usersModel} = require("../models/index")//Importamos los models
const pathFuncionesAuxiliares = path.join(__dirname, '../public/funcionesAuxiliares/mainControllerAux.js');
const auxiliares = require(pathFuncionesAuxiliares);

const controlador = {
    home: (req, res) => {
        const usersDB = usersModel.getAll()
        const artistsDB = usersModel.findArtists()//Los artistas son los que tienen bio
        const artistas = artistsDB;
        const datos = auxiliares.buscarNelementosAleatorios(artistas,"id",3);
        res.render('home.ejs',{datos:datos});
    }

};


module.exports = controlador;