const fs = require("fs")
const path = require("path")

//DB de users
const usersDB = fs.readFileSync(path.join(__dirname,"../database/usersDB.json"),"utf-8")

const usersModel = {}

module.exports = {usersModel}