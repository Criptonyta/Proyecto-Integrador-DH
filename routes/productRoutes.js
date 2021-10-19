const express = require('express');
const router = express.Router();
const {productController} = require('../controllers/index');
const {
    multerMid,
    authMiddleware,
    authMiddlewareMe // TODO PENSAR LA FORMA EN LA QUE PODEMOS IMPLEMENTAR EL ID PARA EDITAR PRODUCTOS SIENDO YO
} = require("../middlewares/index")


router.get('/detailInstrument/:id', productController.instrumentDetail); //Te muestra el detalle de un instrumento  

router.get('/detailSong/:id', productController.songDetail); //Te muestra el detalle de una cancion

router.get('/createproduct', authMiddleware, productController.productempty); //Hoja para cargar los productos
router.post('/createproduct', authMiddleware, multerMid.upload.fields([{
    name: "productEmptyButton",
    maxCount: 1
}]), productController.addProduct); //Hoja para crear productos 

router.get('/createsong', authMiddleware, productController.songempty); //Hoja para cargar la cancion
router.post('/createsong', authMiddleware, multerMid.upload.fields([{
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

router.delete("/deleteinstrument/:idInstrum", authMiddleware, productController.deleteInstrument)
router.delete("/deletesong/:idSong", authMiddleware, productController.deleteSong)

router.get("/editsong/:idSong", authMiddleware, productController.editSong) //pagina para editar cancion
router.get("/editinstrument/:idInstrum", authMiddleware, productController.editInstrument) //pagina para editar instrumento

router.put("/editsong/:idSong", authMiddleware, multerMid.upload.fields([{
    name: 'songEmptyContentBtn1',
    maxCount: 1
}, {
    name: 'songEmptyContentBtn2',
    maxCount: 1
}]), productController.editSongPut) // upload.single('songEmptyImgBtn'),
router.put("/editinstrument/:idInstrum", authMiddleware, multerMid.upload.fields([{
    name: "productEmptyButton",
    maxCount: 1
}]), productController.editInstrumentPut)



module.exports = router