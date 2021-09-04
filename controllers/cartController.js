const controlador = {
    cart1: (req, res) => {
        res.render('cart1.ejs');
    },

    cart2: (req, res) => {
        res.render('cart2.ejs');
    },

    cart3: (req, res) => {
        res.render('cart3.ejs');
    },
};


module.exports = controlador;