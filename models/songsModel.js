const fs = require("fs")
const path = require("path")
const pathSongs = path.join(__dirname, "../database/songsDB.json")
const db = require("../database/models")


const songsModel = {
    getAll: async function () { //Te devuelve todas las canciones
        try {
            const songsDB = await db.songsdb.findAll({raw: true})
            return songsDB
        } catch (error) {
            console.log('Error tratando de mostrar las canciones: '+ error)
            return []
        }
    },
    rescribirDB: function (DB) { //Te resccribe la DB
        fs.writeFileSync(pathSongs, JSON.stringify(DB, null, 4))
    },
    findSong: async function (idsong) { //Busca cancion por ID
        try {
            let song = await this.getAll().find(cancion => cancion.songId == idsong)
            return song
        } catch (error) {
            console.log("Error tratando de encontrar la cancion: " + error)
            return {}
        }
    },
    findArtistSongs: async function (iduser) { //Devuelve todas las canciones de un artista
        try {
            let canciones = await this.getAll().filter(song => song.id == iduser)
            return canciones
        } catch (error) {
            console.log("Error tratando de encontrar las canciones del artista: " + error)
            return []
        }
    },
    crearId: async function () { //Te genera el ID para agregar canciones
        try {
            let all = await this.getAll()
            let id = all[all.length - 1].songId + 1
            return id
        } catch (error) {
            console.log("Error tratando de crear id: " + error)
            return false 
        }
    },
    agregarCancion: async function (cancion) { //Te agrega una cancion
        try {
            let songId = await this.crearId()
            let nuevaCancion = {
            songId,
            ...cancion
        }
            let canciones = await this.getAll()
            canciones.push(nuevaCancion)
            this.rescribirDB(canciones)
            return true
        } catch (error) {
            console.log("Error tratando de agregar la cancion: " + error)
            return false
        }
    },
    editarCancion: async function (oldSong, newData) { //Edita cancion
        try {
            let songsDB = await this.getAll()
            for (let i = 0; i < songsDB.length; i++) {
                if (songsDB[i].songId == oldSong["songId"]) {
                    songsDB[i].titulo = newData.titulo;
                    songsDB[i].descripcion = newData.descripcion;
                    songsDB[i].precio = newData.precio;
                    if (newData.img) {
                        songsDB[i].img = newData.img
                    }
                    if (newData.audioFile) {
                        songsDB[i].audioFile = newData.audioFile
                    }
                }
            }
            this.rescribirDB(songsDB)
    
        } catch (error) {
            console.log("Error tratando de editar cancion: " + error)
            return false
        }
    },
    borrarCancion: async function (idsong) { //Te borra una cancion
        try {
            let canciones = await this.getAll()
            let cancionesDB = canciones.filter(cancion => cancion.songId != idsong)
            this.rescribirDB(cancionesDB)
            return true
        } catch (error) {
            console.log("Error tratando de borrar la cancion: " + error)
            return false
        }
    },
    borrarNcanciones: async function (canciones) { //Te borra todas las canciones que le pases el songId en la lista canciones
        try {
            let songsDB = await this.getAll();
            for (let i = 0; i < canciones.length; i++) { //Borramos las canciones de songsDB
                songsDB = songsDB.filter(elementos => elementos["songId"] != canciones[i])
            }
            this.rescribirDB(songsDB)
            return true
        } catch (error) {
            console.log("Error borrando N instrumentos: " + error)
            return false
        }
    }
}

module.exports = songsModel