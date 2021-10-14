const multerMid = require("./multer")
const authMiddleware = require("./isLogged")
const authMiddlewareMe = require("./isMe")

module.exports = {
    multerMid,
    authMiddleware,
    authMiddlewareMe
}