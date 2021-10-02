const fs = require("fs")
const path = require("path")
const pathSongs = path.join(__dirname,"../database/songsDB.json")

const songsModel = {
    getAll:function(){//Te devuelve todas las canciones
        const songsDB = JSON.parse(fs.readFileSync(pathSongs,"utf-8"))
        return songsDB
    },
    rescribirDB:function(DB){//Te resccribe la DB
        fs.writeFileSync(pathSongs,JSON.stringify(DB,null,4))
    },
    findSong:function(idsong){//Busca cancion por ID
        let song = this.getAll().find(cancion => cancion.songId == idsong)
        return song
    },
    findArtistSongs:function(iduser){//Devuelve todas las canciones de un artista
        let canciones = this.getAll().filter(song => song.id == iduser)
        return canciones
    },
    crearId:function(){//Te genera el ID para agregar canciones
        let all = this.getAll()
        let id = all[all.length-1].id+1
        return id
    },
    agregarCancion:function(cancion){//Te agrega una cancion
        let id = this.crearId()
        let nuevaCancion = {id,...cancion}
        let canciones = this.getAll().push(nuevaCancion)
        this.rescribirDB(canciones)
    },
    editarCancion:function(){},
    borrarCancion:function(idsong){//Te borra una cancion
        let canciones = this.getAll().filter(cancion => cancion.songId != idsong)
        this.rescribirDB(canciones)
    },
    borrarNcanciones:function(canciones){//Te borra todas las canciones que le pases el songId en la lista canciones
        let songsDB = this.getAll();
        for (let i=0; i< canciones.length; i++) {//Borramos las canciones de songsDB
            songsDB = songsDB.filter(elementos => elementos["songId"] != elemsBorrar[i])
            }
        this.rescribirDB(songsDB)
        return true
        }

}

module.exports = songsModel