const fs = require("fs")
const path = require("path")

//DB de instrumentos
const instrumentsDB = fs.readFileSync(path.join(__dirname,"../database/instrumentsDB.json"),"utf-8")

const instrumentModel = {}

module.exports = {instrumentModel}