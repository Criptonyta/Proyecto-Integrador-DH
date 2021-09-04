

const express = require ('express');
const router = express.Router(); 
const productController = require('../controllers/productController');


router.get('/product', productController.product);   // Para hacerlo dinamico, le falta agregar la ruta parametrizada /:id

router.get('/productempty', productController.productempty);

router.get('/songempty', productController.songempty);

router.get('/tienda', productController.tienda);


module.exports = router

// server.get('/product',(req,res)=>{
//     res.render('product.ejs')
// });

// server.get('/productempty',(req,res)=>{
//     res.render('productempty.ejs')
// });

// server.get('/songempty',(req,res)=>{
//     res.render('songempty.ejs')
// });


// server.get('/tienda',(req,res)=>{
//     res.render('tienda.ejs')
// });