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
        } catch (e) {
            console.log('error: tratando de mostrar los instrumentos')
            return []
        }
    },
    rescribirDB: function (DB) { //Te resccribe la DB
        fs.writeFileSync(pathInstruments, JSON.stringify(DB, null, 4))
    },
    findInstrument: function (idinstrument) { //Busca instrumento por ID
        let instrument = this.getAll().find(instrumento => instrumento.InstrumId == idinstrument)
        return instrument
    },
    findArtistInstruments: function (iduser) { //Devuelve todas las canciones de un artista
        let instrumentos = this.getAll().filter(instrumento => instrumento.id == iduser)
        return instrumentos
    },
    crearId: function () { //Te genera el ID para agregar usuarios
        let all = this.getAll()
        let id = all[all.length - 1].InstrumId + 1
        return id
    },
    agregarInstrumento: function (instrumento) { //Te agrega un instrumento
        let InstrumId = this.crearId()
        let nuevoInstrumento = {
            InstrumId,
            ...instrumento
        }
        let instrumentos = this.getAll()
        instrumentos.push(nuevoInstrumento)
        this.rescribirDB(instrumentos)
        return true
    },
    editarInstrumento: function (oldInstrument, newData) { //Edita un instrumento
        let instrumentsDB = this.getAll()
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
    },
    borrarInstrumento: function (idinstrument) { //Te borra el instrumento
        let instrumentos = this.getAll()
        let instrumentosDB = instrumentos.filter(instrumento => instrumento.InstrumId != idinstrument)
        this.rescribirDB(instrumentosDB)
        return true
    },
    borrarNinstrumentos: function (instrumentos) { //Te borra todas los instrumentos que le pases el InstrumId en la lista de instrumentos
        let instrumentsDB = this.getAll();
        for (let i = 0; i < instrumentos.length; i++) { //Borramos los instrumentos de instrumentsDB
            instrumentsDB = instrumentsDB.filter(elementos => elementos["InstrumId"] != instrumentos[i])
        }
        this.rescribirDB(instrumentsDB)
        return true
    }
}

module.exports = instrumentModel