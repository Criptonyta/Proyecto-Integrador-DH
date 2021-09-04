const controlador = {
    product: (req, res) => {
        res.render('product.ejs');
    },

    productempty: (req, res) => {
        res.render('productempty.ejs');
    },

    songempty: (req, res) => {
        res.render('songempty.ejs');
    },

    tienda: (req, res) => {
        res.render('tienda.ejs');
    }
};


module.exports = controlador;