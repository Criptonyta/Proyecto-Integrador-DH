

const express = require ('express');
const router = express.Router(); 
const productController = require('../controllers/productController');


router.get('/detailInstrument/:id', productController.instrumentDetail);  

router.get('/detailSong/:id', productController.songDetail); 

router.get('/createproduct', productController.productempty);

router.get('/createsong', productController.songempty);

router.get('/tienda', productController.tienda);

router.get('/tienda/songs', productController.songs); //Te muestra todas las canciones PRUEBA
router.get('/tienda/instruments', productController.instruments); //Te muestra todos las instrumentos PRUEBA


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