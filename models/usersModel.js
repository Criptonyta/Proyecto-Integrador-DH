const {
    Console
} = require("console")
const fs = require("fs")
const path = require("path")
const pathUsers = path.join(__dirname, "../database/usersDB.json")
const db = require("../database/models")


const usersModel = {
    getAll: function () { //Te devuelve todos los usuarios
        const usersDB = JSON.parse(fs.readFileSync(pathUsers, "utf-8"))
        return usersDB
    },
    rescribirDB: function (DB) { //Te resccribe la DB
        fs.writeFileSync(pathUsers, JSON.stringify(DB, null, 4))
    },
    findUser: function (iduser) { //Busca usuario por ID
        let usuario = this.getAll().find(usuario => usuario.id == iduser)
        return usuario
    },
    findByField: function (field, value) { //te busca el value en el field que pedi
        let usuarios = this.getAll()
        let usuarioBuscado = usuarios.find(usuario => usuario[field] == value)
        return usuarioBuscado
    },
    findArtists: function () { //Te busca todos los artistas (los que tienen bio)
        let artistas = this.getAll().filter(item => item.bio != "")
        return artistas
    },
    crearId: function () { //Te genera el ID para agregar usuarios
        let all = this.getAll()
        let id = all[all.length - 1].id + 1
        return id
    },
    agregarUsuario: function (usuario) { //Te agrega un usuario
        let id = this.crearId()
        let nuevoUsuario = {
            id,
            ...usuario
        }
        let usuarios = this.getAll()
        usuarios.push(nuevoUsuario)
        this.rescribirDB(usuarios)
    },



    editarUsuario: function (profileOld, profileNew) { //Le pasas los datos viejos y los nuevos y te edita la info del usuario
        let userDB = this.getAll()
        userDB.forEach(function (usuario) {
            if (usuario.id == profileOld.id) {
                usuario.email = profileNew.email;
                usuario.nombre = profileNew.nombre;
                usuario.apellido = profileNew.apellido;
                usuario.password = profileNew.password;
                usuario.minibio = profileNew.minibio;
                usuario.skills = profileNew.skills;
                if (profileNew.userAvatarButton == "") {
                    usuario.userAvatar = profileOld.userAvatar
                } else {
                    usuario.userAvatar = profileNew.userAvatarButton
                }
            }
        })
        this.rescribirDB(userDB)
        return true
    },
    borrarUsuario: function (iduser) { //Te borra un usuario
        let usuarios = this.getAll().filter(usuario => usuario.id != iduser)
        this.rescribirDB(usuarios)
    },
}

module.exports = usersModel