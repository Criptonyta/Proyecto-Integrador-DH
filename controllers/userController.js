const controlador = {
    userprofile: (req, res) => {
        res.render('userprofile.ejs');
    },

    login: (req, res) => {
        res.render('login.ejs');
    },

    register: (req, res) => {
        res.render('register.ejs');
    },
};


module.exports = controlador
