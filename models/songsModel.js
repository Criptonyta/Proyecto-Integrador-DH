const fs = require("fs")
const path = require("path")
const pathSongs = path.join(__dirname, "../database/songsDB.json")
const db = require("../database/models")


const songsModel = {
    getAll: async function () { //Te devuelve todas las canciones
        try {
            const songsDB = await db.songsdb.findAll({
                raw: true,
                include: [
                    "id_usersdb"
                ]
            })
            return songsDB
        } catch (error) {
            console.log('Error tratando de mostrar las canciones: ' + error)
            return []
        }
    },
    findSong: async function (idsong) { //Busca cancion por ID
        try {
            let song = await db.songsdb.findByPk(idsong)
            return song
        } catch (error) {
            console.log("Error tratando de encontrar la cancion: " + error)
            return {}
        }
    },
    findArtistSongs: async function (iduser) { //Devuelve todas las canciones de un artista
        try {
            let canciones = await db.songsdb.findAll({
                where: {
                    id: iduser
                }
            })
            // let cancion = await this.getAll()  
            // let canciones = cancion.filter(item => item.id == iduser)
            return canciones
        } catch (error) {
            console.log("Error tratando de encontrar las canciones del artista: " + error)
            return []
        }
    },

    agregarCancion: async function (cancion) { //Te agrega una cancion
        try {
            db.songsdb.create(cancion)
            return true
        } catch (error) {
            console.log("Error tratando de agregar la cancion: " + error)
            return false
        }
    },
    editarCancion: async function (newData, idsong) { //Edita cancion
        try {
            db.songsdb.update(newData, {
                where: {
                    songId: idsong
                }
            })

        } catch (error) {
            console.log("Error tratando de editar cancion: " + error)
            return false
        }
    },
    borrarCancion: async function (idsong) { //Te borra una cancion
        try {
            db.songsdb.destroy({
                where: {
                    songId: idsong
                }
            })
            return true
        } catch (error) {
            console.log("Error tratando de borrar la cancion: " + error)
            return false
        }
    },
    borrarNcanciones: async function (canciones) { //Te borra todas las canciones que le pases el songId en la lista canciones
        console.log(canciones)
        try {
            for (let i = 0; i < canciones.length; i++) { //Borramos las canciones de songsDB
                await db.songsdb.destroy({
                    where: {
                        songId: canciones[i]
                    }
                })
            }
            return true
        } catch (error) {
            console.log("Error borrando N canciones: " + error)
            return false
        }
    }
}

module.exports = songsModel