//const {instrumentsModel,songsModel,usersModel} = require("../models/index")//Importamos los models

const controlador = {
    cart1: (req, res) => {
        let paises = ["","Argentina","Brazil","Chile","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","Argentina","Brazil","Chile","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra"]
        let provincias = ["","Buenos Aires", "CABA","Cordoba","Mendoza"]

        res.render('cart1.ejs',{paises:paises,provincias:provincias});
    },

    cart2: (req, res) => {
        let paises = ["Paises","Argentina","Brazil","Chile","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","Argentina","Brazil","Chile","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra"]
        let provincias = ["Provincia","Buenos Aires", "CABA","Cordoba","Mendoza"]

        res.render('cart2.ejs',{paises:paises,provincias:provincias});
    },

    cart3: (req, res) => {
        res.render('cart3.ejs');
    },
};


module.exports = controlador;