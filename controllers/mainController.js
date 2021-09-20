const fs = require ('fs');
const path = require ("path");
const pathInstruments = path.join(__dirname, '../database/instrumentsDB.json');
const pathSongs = path.join(__dirname, '../database/songsDB.json');
const pathUsers= path.join(__dirname, '../database/usersDB.json');


const controlador = {
    home: (req, res) => {
        const usersDB = JSON.parse(fs.readFileSync(pathUsers));
        const artistsDB = usersDB.filter(item => item.bio != "")//Los artistas son los que tienen bio
        const artistas = artistsDB;
        const datos = artistas.slice(1,4)
        res.render('home.ejs',{datos:datos});
    }

};


module.exports = controlador;