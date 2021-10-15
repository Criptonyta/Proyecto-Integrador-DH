const {
    usersModel
} = require('../models/index')

function authMiddleware(req, res, next) {
    if (req.cookies.recordame && req.session.userLogged == undefined) {
        let user = usersModel.findUser(req.cookies.recordame)
        delete user.password
        req.session.userLogged = user
        next()
    } else {
        if (req.session.userLogged == undefined) {
            res.redirect('/user/login')
        } else {
            next();
            //res.send('Esta pagina es solo para usuarios') // TODO MEJORAR CON UN MENSAJE MODAL
        }
    }
}




// let user = usersModel.findUser(req.cookies.recordame)

// function recordameMiddleware(req, res, next) {
//     next();
//     if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) // si recordame es distinto a undefined y a la vez el usuario logado existe, quiero que pase a lo siguiente.
//         for (let i = 0; i < users.length; i++) { // Ya que en la cookie solo guarde el email, quiero tambien almacenar en ella otros datos, entonces uso el email para que me relacione con otros datos que tengo guardados en session (usando un for, leyendo todos los usuarios )
//             if (users[i].email == req.cookies.recordame) {
//                 usuarioALoguearse = users[i];
//                 break;
//             }
//             req.session.usuarioLogueado = usuarioALoguearse;
//         }
// }



module.exports = authMiddleware