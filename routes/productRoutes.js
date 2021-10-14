const express = require('express');
const router = express.Router();
const {
    productController
} = require('../controllers/index');
const {
    multerMid,
    authMiddleware,
    authMiddlewareMe
} = require("../middlewares/index")


router.get('/detailInstrument/:id', productController.instrumentDetail); //Te muestra el detalle de un instrumento  

router.get('/detailSong/:id', productController.songDetail); //Te muestra el detalle de una cancion

router.get('/createproduct', authMiddleware, authMiddlewareMe, productController.productempty); //Hoja para cargar los productos
router.post('/createproduct', authMiddleware, authMiddlewareMe, multerMid.upload.fields([{
    name: "productEmptyButton",
    maxCount: 1
}]), productController.addProduct); //Hoja para crear productos 

router.get('/createsong', authMiddleware, authMiddlewareMe, productController.songempty); //Hoja para cargar la cancion
router.post('/createsong', authMiddleware, authMiddlewareMe, multerMid.upload.fields([{
    name: 'songEmptyContentBtn1',
    maxCount: 1
}, {
    name: 'songEmptyContentBtn2',
    maxCount: 1
}]), productController.addSong); //Hoja para subir imagenes y mp3s de canciones con Multer 'songEmptyContentBtn'

router.get('/tienda', productController.tienda); //Tienda

router.get('/tienda/songs', productController.songs); //Te muestra todas las canciones 
router.get('/tienda/instruments', productController.instruments); //Te muestra todos las instrumentos 
router.get('/tienda/artists', productController.artists); //Te muestra todos los artistas
router.get('/tienda/search', productController.searched) //Todos los productos buscados

router.delete("/deleteinstrument/:idInstrum", authMiddleware, authMiddlewareMe, productController.deleteInstrument)
router.delete("/deletesong/:idSong", authMiddleware, authMiddlewareMe, productController.deleteSong)

router.get("/editsong/:idSong", authMiddleware, authMiddlewareMe, productController.editSong) //pagina para editar cancion
router.get("/editinstrument/:idInstrum", authMiddleware, authMiddlewareMe, productController.editInstrument) //pagina para editar instrumento

router.put("/editsong/:idSong", authMiddleware, authMiddlewareMe, multerMid.upload.fields([{
    name: 'songEmptyContentBtn1',
    maxCount: 1
}, {
    name: 'songEmptyContentBtn2',
    maxCount: 1
}]), productController.editSongPut) // upload.single('songEmptyImgBtn'),
router.put("/editinstrument/:idInstrum", authMiddleware, authMiddlewareMe, multerMid.upload.fields([{
    name: "productEmptyButton",
    maxCount: 1
}]), productController.editInstrumentPut)



module.exports = router