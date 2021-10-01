const fs = require ('fs');
const path = require ("path");

//const {instrumentsModel,songsModel,usersModel} = require("../models/index")//Importamos los models

const pathInstruments = path.join(__dirname, '../database/instrumentsDB.json');//Cuando esten los models borrar
const pathSongs = path.join(__dirname, '../database/songsDB.json');//Cuando esten los models borrar
const pathUsers= path.join(__dirname, '../database/usersDB.json');//Cuando esten los models borrar
const pathFuncionesAuxiliares = path.join(__dirname, '../public/funcionesAuxiliares/mainControllerAux.js');
const auxiliares = require(pathFuncionesAuxiliares);



const controlador = {
    home: (req, res) => {
        const usersDB = JSON.parse(fs.readFileSync(pathUsers));
        const artistsDB = usersDB.filter(item => item.bio != "")//Los artistas son los que tienen bio
        const artistas = artistsDB;
        const datos = auxiliares.buscarNelementosAleatorios(artistas,"id",3);
        res.render('home.ejs',{datos:datos});
    }

};


module.exports = controlador;