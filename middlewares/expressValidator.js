const {check} = require("express-validator")

/* email, password */ 
const validacionesLogin = [
    check("email").notEmpty().withMessage("El mail no puede estar en blanco").bail()
    .isEmail().withMessage("Formato de mail invalido"),
    check("password").notEmpty().withMessage("La contraseña no puede estar en blanco")
]
//nombre,apellido,email,password,minibio,userAvatarRegisterButton
const validacionesRegister = [
    check("nombre").notEmpty().withMessage("Debe escribir un nombre").bail()
    .isLength({min:1,max:15}).withMessage("Su nombre no puede tener mas de 15 caracteres").bail(),
    check("apellido").isLength({min:0,max:15}).withMessage("Su apellido no puede tener mas de 15 caracteres").bail(),
    check("email").notEmpty().withMessage("Debe escribir un email").bail()
    .isEmail().withMessage("Debe escribir un email valido").bail(),
    check("password").notEmpty().withMessage("Debe escribir una contraseña").bail()
    .isLength({min:7}).withMessage("La contraseña debe tener al menos 7 caracteres").bail(),
    check("minibio").isLength({max:50}).withMessage("La bio no puede tener mas de 50 caracteres"),
    check("userAvatarRegisterButton").custom((value,{req})=>{
        let file = req.file
        if (file){
            if (file.mimetype !="image/png" && file.mimetype !="image/jpg" && file.mimetype !="image/jpeg" ){
                throw new Error("Los formatos de archivos validos son .jpg,.jpeg y .png")
            }
            return true
        }
        return true
    })
]


module.exports = {validacionesLogin,validacionesRegister}