function authMiddlewareMe(req, res, next) {
    if (req.session.userLogged.id == req.params.iduser) {
        next()
    } else {
        res.redirect('/user/userprofile/' + req.session.userLogged.id);
        //res.send('Esta pagina es solo para usuarios') // TODO MEJORAR CON UN MENSAJE MODAL
    }
}

module.exports = authMiddlewareMe