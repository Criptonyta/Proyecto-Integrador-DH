function authMiddlewareMe(req, res, next) {

    try {
        if (req.session.userLogged.id == req.params.iduser) {
            next()
        } else {
            res.render("error403")
            //res.redirect('/user/userprofile/' + req.session.userLogged.id);
            //res.send('Esta pagina es solo para usuarios') // TODO MEJORAR CON UN MENSAJE MODAL
        }
    } catch (e) {
        res.redirect('/user/userprofile/' + req.session.userLogged.id);
    }

}

module.exports = authMiddlewareMe