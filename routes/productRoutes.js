const express = require('express');
const router = express.Router();
const {
    productController
} = require('../controllers/index');
const multer = require('multer');
const path = require('path');

//Permite al usuario cargar su cancion con multer en un proceso BATCH (subida manual a Youtube)
const songstorage = multer.diskStorage({ // Configura el almacenamiento
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/batchSongs'))
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})
const uploadsong = multer({
    songstorage
}) // Variable de ejecucion

//Permite al usuario cargar el arte de tapa del desco de su cancion con multer
const storage = multer.diskStorage({ // Configura el almacenamiento
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/MusicFilesCoverImg/resized'))
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})
const upload = multer({
    storage
}) // Variable de ejecucion



router.get('/detailInstrument/:id', productController.instrumentDetail); //Te muestra el detalle de un instrumento  

router.get('/detailSong/:id', productController.songDetail); //Te muestra el detalle de una cancion

router.get('/createproduct', productController.productempty); //Hoja para cargar los productos
router.post('/createproduct', productController.addProduct); //Hoja para crear productos 

router.get('/createsong', productController.songempty); //Hoja para cargar la cancion
router.post('/createsong', upload.single('songEmptyImgBtn'), productController.addSong); //Hoja para crear canciones con Multer

router.get('/tienda', productController.tienda); //Tienda

router.get('/tienda/songs', productController.songs); //Te muestra todas las canciones PRUEBA
router.get('/tienda/instruments', productController.instruments); //Te muestra todos las instrumentos PRUEBA
router.get('/tienda/artists', productController.artists); //Te muestra todos los artistas
router.get('/tienda/search', productController.searched) //Todos los productos buscados

router.delete("/deleteinstrument/:idInstrum", productController.deleteInstrument)
router.delete("/deletesong/:idSong", productController.deleteSong)

router.get("/editsong/:idSong", productController.editSong) //pagina para editar cancion
router.get("/editinstrument/:idInstrum", productController.editInstrument) //pagina para editar instrumento

router.put("/editsong/:idSong", productController.editSongPut) // upload.single('songEmptyImgBtn'),
router.put("/editinstrument/:idInstrum", productController.editInstrumentPut)



module.exports = router