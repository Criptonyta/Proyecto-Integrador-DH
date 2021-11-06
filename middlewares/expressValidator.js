const {check} = require("express-validator")

/* email, password */ 
const validacionesLogin = [
    check("email").notEmpty().withMessage("El mail no puede estar en blanco").bail()
    .isEmail().withMessage("Formato de mail invalido"),
    check("password").notEmpty().withMessage("La contraseña no puede estar en blanco")
]


module.exports = {validacionesLogin}