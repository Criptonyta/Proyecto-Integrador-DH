const instrumentsDB = require('../database/instrumentsDB.json');
const songsDB = require('../database/songsDB.json');
const usersDB = require('../database/usersDB.json');   


const controlador = {
    product: (req, res) => {
        const instrumento = instrumentsDB[0];        
        res.render('product.ejs', {instrumento:instrumento});


    },

    productempty: (req, res) => {
        res.render('productempty.ejs');
    },

    songempty: (req, res) => {
        res.render('songempty.ejs');
    },

    tienda: (req, res) => {
        const instrumentos = instrumentsDB.slice(1,6);        
        const musicos = songsDB.slice(1,6);

        // let instrumentos = [
        //     {img:"bass.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000"},
        //     {img:"instrum_piano_fondoblanco.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000"},
        //     {img:"instrum_saxo_fondoblanco.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000"},
        //     {img:"instrum_bateria_fondoblanco.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000"},
        //     {img:"instrum_guitarra_fondoblanco.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000"},
        //     {img:"instrum_teclado_fondoblanco.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000"},
        // ]
             let datos = [
            {userid: 123, artistName: "Jose", img: 'recomendado1Cropped.JPG',skills: 'Guitarrista',bio:'soy un guitarrista'},
            {userid: 123, artistName: "Alberto", img: 'recomendado2Cropped.JPG',skills: 'Cantante',bio:'soy un cantante'},
            {userid: 123, artistName: "Carlos", img: 'recomendado3Cropped.JPG',skills: 'Baterista',bio:'soy un baterista'},
            {userid: 123, artistName: "Carlos", img: 'recomendado2Cropped.JPG',skills: 'Baterista',bio:'soy un baterista'},
            ]
        res.render('tienda.ejs',{datos:datos,musicos:musicos,instrumentos:instrumentos});
    }
};


module.exports = controlador;