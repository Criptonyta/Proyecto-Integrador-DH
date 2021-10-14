function authMiddleware(req, res, next) {
    if (req.session.userLogged == undefined) {
        res.redirect('/user/login')
    } else {
        next();
        //res.send('Esta pagina es solo para usuarios') // TODO MEJORAR CON UN MENSAJE MODAL
    }
}

module.exports = authMiddleware