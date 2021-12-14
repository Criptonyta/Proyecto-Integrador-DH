const express = require('express');
const router = express.Router();
const {
    productController
} = require('../controllers/index');
const {
    multerMid,
    authMiddleware,
    authMiddlewareMe,
    expressValidatorMid
} = require("../middlewares/index")


router.get('/detailInstrument/:id', productController.instrumentDetail); //Te muestra el detalle de un instrumento  

router.get('/detailSong/:id', productController.songDetail); //Te muestra el detalle de una cancion

router.get('/createproduct', authMiddleware, productController.productempty); //Hoja para cargar los productos
router.post('/createproduct', authMiddleware, multerMid.upload.fields([{
    name: "productEmptyButton",
    maxCount: 1
}]), expressValidatorMid.validacionesCargarInstrum, productController.addProduct); //Hoja para crear productos 

router.get('/createsong', authMiddleware, productController.songempty); //Hoja para cargar la cancion
router.post('/createsong', authMiddleware, multerMid.upload.fields([{
    name: 'songEmptyContentBtn1',
    maxCount: 1
}, {
    name: 'songEmptyContentBtn2',
    maxCount: 1
}]), expressValidatorMid.validacionesCargarCancion, productController.addSong); //Hoja para subir imagenes y mp3s de canciones con Multer 'songEmptyContentBtn'

router.get('/tienda', productController.tienda); //Tienda

router.get('/tienda/songs', productController.songs); //Te muestra todas las canciones 
router.get('/tienda/instruments', productController.instruments); //Te muestra todos las instrumentos 
router.get('/tienda/artists', productController.artists); //Te muestra todos los artistas
router.get('/tienda/search', productController.searched) //Todos los productos buscados

router.delete("/deleteinstrument/:idInstrum/:iduser?", authMiddleware, authMiddlewareMe, productController.deleteInstrument)
router.delete("/deletesong/:idSong/:iduser?", authMiddleware, authMiddlewareMe, productController.deleteSong)

router.get("/editsong/:idSong/:iduser?", authMiddleware, authMiddlewareMe, productController.editSong) //pagina para editar cancion
router.get("/editinstrument/:idInstrum/:iduser?", authMiddleware, authMiddlewareMe, productController.editInstrument) //pagina para editar instrumento

router.put("/editsong/:idSong/:iduser?", authMiddleware, authMiddlewareMe, multerMid.upload.fields([{
    name: 'songEmptyContentBtn1',
    maxCount: 1
}, {
    name: 'songEmptyContentBtn2',
    maxCount: 1
}]), expressValidatorMid.validacionesEditarCancion, productController.editSongPut) // upload.single('songEmptyImgBtn'),
router.put("/editinstrument/:idInstrum/:iduser?", authMiddleware, authMiddlewareMe, multerMid.upload.fields([{
    name: "productEmptyButton",
    maxCount: 1
}]), expressValidatorMid.validacionesEditarInstrum, productController.editInstrumentPut)


router.get('/api/products/instruments', productController.apiProdList) //Ruta de API productos

router.get('/api/products/instruments/:id', productController.apiProdItem) //Ruta de API para 1 producto

router.get('/api/products/songs', productController.apiSongList) //Ruta de API Canciones

router.get('/api/products/songs/:id', productController.apiSongItem) //Ruta de API para 1 Canciones

module.exports = router