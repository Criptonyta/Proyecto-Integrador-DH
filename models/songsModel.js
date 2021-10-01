const fs = require("fs")
const path = require("path")

//DB de songs
const songsDB = fs.readFileSync(path.join(__dirname,"../database/songsDB.json"),"utf-8")

const songsModel = {}

module.exports = {songsModel}