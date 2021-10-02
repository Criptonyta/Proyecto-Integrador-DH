const fs = require("fs")
const path = require("path")
const pathInstruments = path.join(__dirname,"../database/instrumentsDB.json")

const instrumentModel = {
    getAll:function(){//Te devuelve todos los instrumentos
        const instrumentsDB = JSON.parse(fs.readFileSync(pathInstruments,"utf-8"))
        return instrumentsDB
    },
    rescribirDB:function(DB){//Te resccribe la DB
        fs.writeFileSync(pathInstruments,JSON.stringify(DB,null,4))
    },
    findInstrument:function(idinstrument){//Busca instrumento por ID
        let instrument = this.getAll().find(instrumento => instrumento.InstrumId == idinstrument)
        return instrument
    },
    findOwner:function(iduser){//Busca de quien es el instrumento
        let usuario = this.getAll().find(instrumento => instrumento.id == iduser)
        return usuario
    },
    crearId:function(){//Te genera el ID para agregar usuarios
        let all = this.getAll()
        let id = all[all.length-1].id+1
        return id
    },
    agregarInstrumento:function(instrumento){//Te agrega un instrumento
        let id = this.crearId()
        let nuevoInstrumento = {id,...instrumento}
        let instrumentos = this.getAll().push(nuevoInstrumento)
        fs.writeFileSync(pathInstruments,JSON.stringify(instrumentos,null,4))
    },
    editarInstrumento:function(){},
    borrarInstrumento:function(idinstrument){//Te borra el instrumento
        let instrumentos = this.getAll().filter(instrumento => instrumento.InstrumId != idinstrument)
        fs.writeFileSync(pathInstruments,JSON.stringify(instrumentos,null,4))
    },
}

module.exports = {instrumentModel}