const fs = require("fs")
const path = require("path")
const pathUsers = path.join(__dirname, "../database/usersDB.json")
const db = require("../database/models")


const usersModel = {
    getAll: async function () { //Te devuelve todos los usuarios
        try {
            const usersDB = await db.usersdb.findAll({
                raw: true
            })
            return usersDB
        } catch (error) {
            console.log('Error tratando de mostrar los usuarios: ' + error)
            return []
        }
    },
    findUser: async function (iduser) { //Busca usuario por ID
        try {
            let usuario = await db.usersdb.findByPk(iduser)
            // let usuarios = await this.getAll()
            // let usuario = usuarios.find(item => item.id == iduser)
            return usuario
        } catch (error) {
            console.log("Error tratando de encontrar el usuario: " + error)
            return {}
        }
    },
    findByField: async function (field, value) { //te busca el value en el field que pedi
        try {
            let usuarios = await this.getAll()
            let usuarioBuscado = usuarios.find(usuario => usuario[field] == value)
            return usuarioBuscado
        } catch (error) {
            console.log("Error tratando de encontrar el artista: " + error)
            return {}
        }
    },
    findArtists: async function () { //Te busca todos los artistas (los que tienen bio)
        try {
            let artistas = await db.usersdb.findAll({
                where: {
                    bio: {
                        [db.Sequelize.Op.ne]: ''
                    }
                }
            })
            // let usuarios = await this.getAll()
            // let artistas = usuarios.filter(item => item.bio != "")
            return artistas
        } catch (error) {
            console.log("Error tratando de encontrar los artistas: " + error)
            return []
        }
    },
    crearId: async function () { //Te genera el ID para agregar usuarios
        try {
            let all = await this.getAll()
            let id = all[all.length - 1].id + 1
            return id
        } catch (error) {
            console.log("Error tratando de generar el id")
            return false
        }
    },
    agregarUsuario: async function (usuario) { //Te agrega un usuario
        try {
            db.usersdb.create(usuario)
            return true
        } catch (error) {
            console.log("Error al agregar usuario: " + error)
            return false
        }
    },
    editarUsuario: async function (profileNew, iduser) { //Le pasas los datos viejos y los nuevos y te edita la info del usuario
        try {
            // let userDB = await this.getAll()
            db.usersdb.update(profileNew, {
                where: {
                    id: iduser
                }
            })
            return true

        } catch (error) {
            console.log("Error tratando de editar usuario: " + error)
            return false
        }
    },
    borrarUsuario: async function (iduser) { //Te borra un usuario
        try {
            db.usersdb.destroy({
                where: {
                    id: iduser
                }
            })
            return true
        } catch (error) {
            console.log("Error tratando de borrar el usuario: " + error)
            return false
        }
    },
}

module.exports = usersModel