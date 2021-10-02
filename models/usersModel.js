const fs = require("fs")
const path = require("path")
const pathUsers = path.join(__dirname,"../database/usersDB.json")

const usersModel = {
    getAll:function(){//Te devuelve todos los usuarios
        const usersDB = JSON.parse(fs.readFileSync(pathUsers,"utf-8"))
        return usersDB
    },
    rescribirDB:function(DB){//Te resccribe la DB
        fs.writeFileSync(pathUsers,JSON.stringify())
    },
    findUser:function(iduser){//Busca usuario por ID
        let usuario = this.getAll().find(usuario => usuario.id == iduser)
        return usuario
    },
    findArtist:function(){//Te busca todos los artistas (los que tienen bio)
        let artistas = this.getAll().filter(item => item.bio != "")
        return artistas
    },
    crearId:function(){//Te genera el ID para agregar usuarios
        let all = this.getAll()
        let id = all[all.length-1].id+1
        return id
    },
    agregarUsuario:function(usuario){//Te agrega un usuario
        let id = this.crearId()
        let nuevoUsuario = {id,...usuario}
        let usuarios = this.getAll().push(nuevoUsuario)
        fs.writeFileSync(pathUsers,JSON.stringify(usuarios,null,4))
    },
    editarUsuario:function(){},
    borrarUsuario:function(iduser){//Te borra un usuario
        let usuarios = this.getAll().filter(usuario => usuario.id != iduser)
        fs.writeFileSync(pathUsers,JSON.stringify(usuarios,null,4))
    },
}

module.exports = {usersModel}