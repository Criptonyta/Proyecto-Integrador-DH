const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/detailInstrument/:id', productController.instrumentDetail); //Te muestra el detalle de un instrumento  

router.get('/detailSong/:id', productController.songDetail); //Te muestra el detalle de una cancion

router.get('/createproduct', productController.productempty); //Hoja para cargar los productos
router.post('/createproduct', productController.addProduct); //Hoja para crear productos 

router.get('/createsong', productController.songempty); //Hoja para cargar la cancion
router.post('/createsong', productController.addSong); //Hoja para crear canciones

router.get('/tienda', productController.tienda); //Tienda

router.get('/tienda/songs', productController.songs); //Te muestra todas las canciones PRUEBA
router.get('/tienda/instruments', productController.instruments); //Te muestra todos las instrumentos PRUEBA
router.get('/tienda/artists', productController.artists); //Te muestra todos los artistas
router.get('/tienda/search', productController.searched) //Todos los productos buscados

router.delete("/deleteinstrument/:idInstrum", productController.deleteInstrument)
router.delete("/deletesong/:idSong", productController.deleteSong)

router.get("/editsong/:idSong", productController.editSong)//pagina para editar cancion
router.get("/editinstrument/:idInstrum", productController.editInstrument)//pagina para editar instrumento

router.put("/editsong/:idSong", productController.editSongPut)
router.put("/editinstrument/:idInstrum", productController.editInstrumentPut)



module.exports = router