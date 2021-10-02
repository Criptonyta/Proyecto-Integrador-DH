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
    findOwner:function(iduser){//Busca de quien es la cancion
        let usuario = this.getAll().find(cancion => cancion.id == iduser)
        return usuario
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
        fs.writeFileSync(pathSongs,JSON.stringify(canciones,null,4))
    },
    editarCancion:function(){},
    borrarCancion:function(idsong){//Te borra una cancion
        let canciones = this.getAll().filter(cancion => cancion.songId != idsong)
        fs.writeFileSync(pathSongs,JSON.stringify(canciones,null,4))
    },
}

module.exports = {songsModel}