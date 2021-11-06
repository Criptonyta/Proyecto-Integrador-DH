const multerMid = require("./multer")
const authMiddleware = require("./isLogged")
const authMiddlewareMe = require("./isMe")
const expressValidatorMid = require("./expressValidator")

module.exports = {
    multerMid,
    authMiddleware,
    authMiddlewareMe,
    expressValidatorMid
}