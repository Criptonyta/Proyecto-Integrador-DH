const fs = require("fs")
const path = require("path")
const pathInstruments = path.join(__dirname, "../database/instrumentsDB.json")
const db = require("../database/models")

const instrumentModel = {
    getAll: async function () { //Te devuelve todos los instrumentos
        try {
            const instrumentsDB = await db.instrumentsdb.findAll({raw: true})
            return instrumentsDB
        } catch (error) {
            console.log('Error tratando de mostrar los instrumentos: '+ error)
            return []
        }
    },
    rescribirDB: function (DB) { //Te resccribe la DB
        fs.writeFileSync(pathInstruments, JSON.stringify(DB, null, 4))
    },
    findInstrument: async function (idinstrument) { //Busca instrumento por ID
        try {
            let instrument = await this.getAll().find(instrumento => instrumento.InstrumId == idinstrument)
            return instrument
        } catch (error) {
            console.log("Error tratando de encontrar el instrumento: " + error)
            return {}
        }
    },
    findArtistInstruments: async function (iduser) { //Devuelve todas las canciones de un artista
        try {
            let instrumentos = await this.getAll().filter(instrumento => instrumento.id == iduser)
            return instrumentos
        } catch (error) {
            console.log("Error tratando de encontrar los instrumentos del artista: " + error)
            return []
        }
    },
    crearId: async function () { //Te genera el ID para agregar usuarios
        try {
            let all = await this.getAll()
            let id = all[all.length - 1].InstrumId + 1
            return id
        } catch (error) {
            console.log("Error tratando de crear id: " + error)
            return false
        }
    },
    agregarInstrumento: async function (instrumento) { //Te agrega un instrumento
        try {
            let InstrumId = await this.crearId()
            let nuevoInstrumento = {
            InstrumId,
            ...instrumento
        }
            let instrumentos = await this.getAll()
            instrumentos.push(nuevoInstrumento)
            this.rescribirDB(instrumentos)
            return true
        } catch (error) {
            console.log("Error tratando de agregar instrumento: " + error)
            return false
        }
    },
    editarInstrumento: async function (oldInstrument, newData) { //Edita un instrumento
        try {
            let instrumentsDB = await this.getAll()
            for (let i = 0; i < instrumentsDB.length; i++) {
                if (instrumentsDB[i].InstrumId == oldInstrument["InstrumId"]) {
                    instrumentsDB[i].titulo = newData.titulo;
                    instrumentsDB[i].descripcion = newData.descripcion;
                    instrumentsDB[i].precio = newData.precio;
                    if (newData.img) {
                        instrumentsDB[i].img = newData.img
                    }
                }
            }
            this.rescribirDB(instrumentsDB)
            return true
        } catch (error) {
            console.log("Error tratando de editar instrumento: " + error)
            return false
        }
    },
    borrarInstrumento: async function (idinstrument) { //Te borra el instrumento
        try {
            let instrumentos = await this.getAll()
            let instrumentosDB = instrumentos.filter(instrumento => instrumento.InstrumId != idinstrument)
            this.rescribirDB(instrumentosDB)
            return true
        } catch (error) {
            console.log("Error tratando de borrar el instrumento: " + error)
            return false
        }
    },
    borrarNinstrumentos: async function (instrumentos) { //Te borra todas los instrumentos que le pases el InstrumId en la lista de instrumentos
        try {
            let instrumentsDB = await this.getAll();
            for (let i = 0; i < instrumentos.length; i++) { //Borramos los instrumentos de instrumentsDB
                instrumentsDB = instrumentsDB.filter(elementos => elementos["InstrumId"] != instrumentos[i])
            }
            this.rescribirDB(instrumentsDB)
            return true
        } catch (error) {
            console.log("Error borrando N instrumentos: " + error)
            return false
        }
    }
}

module.exports = instrumentModel