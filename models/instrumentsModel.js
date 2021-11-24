const fs = require("fs")
const path = require("path")
const pathInstruments = path.join(__dirname, "../database/instrumentsDB.json")
const db = require("../database/models")

const instrumentModel = {
    getAll: async function () { //Te devuelve todos los instrumentos
        try {
            const instrumentsDB = await db.instrumentsdb.findAll({
                raw: true
            })
            return instrumentsDB
        } catch (error) {
            console.log('Error tratando de mostrar los instrumentos: ' + error)
            return []
        }
    },
    findInstrument: async function (idinstrument) { //Busca instrumento por ID
        try {
            let instrument = await db.instrumentsdb.findByPk(idinstrument)
            // let instruments = await this.getAll()
            // let instrument = instruments.find(instrumento => instrumento.InstrumId == idinstrument)
            return instrument
        } catch (error) {
            console.log("Error tratando de encontrar el instrumento: " + error)
            return {}
        }
    },
    findArtistInstruments: async function (iduser) { //Devuelve todas las canciones de un artista
        try {
            let instrumentos = await db.instrumentsdb.findAll({
                where: {
                    id: iduser
                }
            })
            // let instrumento = await this.getAll()
            // let instrumentos = instrumento.filter(item => item.id == iduser)
            return instrumentos
        } catch (error) {
            console.log("Error tratando de encontrar los instrumentos del artista: " + error)
            return []
        }
    },

    agregarInstrumento: async function (instrumento) { //Te agrega un instrumento
        try {
            await db.instrumentsdb.create(instrumento)
            return true
        } catch (error) {
            console.log("Error tratando de agregar instrumento: " + error)
            return false
        }
    },
    editarInstrumento: async function (newData, iduser) { //Edita un instrumento
        try {
            await db.instrumentsdb.update(newData, {
                where: {
                    id: iduser
                }
            })
            return true
        } catch (error) {
            console.log("Error tratando de editar instrumento: " + error)
            return false
        }
    },
    borrarInstrumento: async function (idinstrument) { //Te borra el instrumento
        try {
            await db.instrumentsdb.destroy({
                where: {
                    InstrumId: idinstrument
                }
            })
            return true
        } catch (error) {
            console.log("Error tratando de borrar el instrumento: " + error)
            return false
        }
    },
    borrarNinstrumentos: async function (instrumentos) { //Te borra todas los instrumentos que le pases el InstrumId en la lista de instrumentos
        try {
            for (let i = 0; i < instrumentos.length; i++) { //Borramos los instrumentos de instrumentsDB
                await db.instrumentsdb.destroy({
                    where: {
                        InstrumId: instrumentos[i]
                    }
                })
            }
            return true
        } catch (error) {
            console.log("Error borrando N instrumentos: " + error)
            return false
        }
    }
}

module.exports = instrumentModel