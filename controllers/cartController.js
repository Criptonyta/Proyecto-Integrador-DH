//const {instrumentsModel,songsModel,usersModel} = require("../models/index")//Importamos los models

const controlador = {
    cart1: (req, res) => {
        let paises = ["","Argentina","Brazil","Chile","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","Argentina","Brazil","Chile","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra"]
        let provincias = ["","Buenos Aires", "CABA","Cordoba","Mendoza"]

        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}

        res.render('cart1.ejs',{paises:paises,provincias:provincias});
    },

    cart2: (req, res) => {
        let paises = ["Paises","Argentina","Brazil","Chile","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","Argentina","Brazil","Chile","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra","EEUU","Mexico","Bolivia","Uruguay","Paraguay","Suecia","Escocia","Inglaterra"]
        let provincias = ["Provincia","Buenos Aires", "CABA","Cordoba","Mendoza"]

        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}

        res.render('cart2.ejs',{paises:paises,provincias:provincias});
    },

    cart3: (req, res) => {

        //Creamos la variable locals para usar en la vista
        if (req.session.userLogged ==  undefined){res.locals.idusuario = "noLogueado"}
        else if (req.session !=  undefined){
            res.locals.idusuario = req.session.userLogged.id;
            res.locals.nombre = req.session.userLogged.nombre;
        }
        else{res.locals.idusuario = req.cookie.recordame.id}

        res.render('cart3.ejs');
    },
};


module.exports = controlador;