const usersDB = require('../database/usersDB.json'); 

const controlador = {
    home: (req, res) => {
        /*let datos = [
        {userid: 123, artistName: "Jose", img: 'recomendado1Cropped.JPG',skills: 'Guitarrista',bio:'soy un guitarrista'},
        {userid: 123, artistName: "Alberto", img: 'recomendado2Cropped.JPG',skills: 'Cantante',bio:'soy un cantante'},
        {userid: 123, artistName: "Carlos", img: 'recomendado3Cropped.JPG',skills: 'Baterista',bio:'soy un baterista'},
    ]*/

        const datos = usersDB.slice(1,4)
        res.render('home.ejs',{datos:datos});
    }

};


module.exports = controlador;