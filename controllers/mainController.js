const fs = require ('fs');
const path = require ("path");

const {usersModel} = require("../models/index")//Importamos los models
const pathFuncionesAuxiliares = path.join(__dirname, '../public/funcionesAuxiliares/mainControllerAux.js');
const auxiliares = require(pathFuncionesAuxiliares);

const controlador = {
    home: (req, res) => {
        const artistsDB = usersModel.findArtists()//Los artistas son los que tienen bio
        const datos = auxiliares.buscarNelementosAleatorios(artistsDB,"id",3);

        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){res.locals.idusuario = req.session.userLogged.id}
        else{res.locals.idusuario = req.cookie.recordame.id}

        res.render('home.ejs',{datos:datos});
    }

};


module.exports = controlador;