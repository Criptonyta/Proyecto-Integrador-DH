const express = require('express');
const router = express.Router();
const {
    productController
} = require('../controllers/index');
const multer = require('multer');
const path = require('path');

//Permite al usuario cargar su cancion con multer en un proceso BATCH (subida manual a Youtube)
const contentstorage = multer.diskStorage({ // Configura el almacenamiento
    destination: function (req, file, cb) {
        if (file.mimetype == 'audio/mpeg') { // || 'audio/mp3' || 'audio/wav' || 'audio/flac'
            cb(null, path.join(__dirname, '../public/batchSongs'))
        } else {
            cb(null, path.join(__dirname, '../public/images/MusicFilesCoverImg/resized'))
        }
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})
const songupload = multer({
    storage: contentstorage
}) // Variable de ejecucion

//Permite al usuario cargar el arte de tapa del disco de su cancion con multer
// const imgstorage = multer.diskStorage({ // Configura el almacenamiento
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '../public/images/MusicFilesCoverImg/resized'))
//     },
//     filename: function (req, file, cb) {
//         cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
//     }
// })
// const imgupload = multer({
//     storage: imgstorage
// }) // Variable de ejecucion



router.get('/detailInstrument/:id', productController.instrumentDetail); //Te muestra el detalle de un instrumento  

router.get('/detailSong/:id', productController.songDetail); //Te muestra el detalle de una cancion

router.get('/createproduct', productController.productempty); //Hoja para cargar los productos
router.post('/createproduct', productController.addProduct); //Hoja para crear productos 

router.get('/createsong', productController.songempty); //Hoja para cargar la cancion
router.post('/createsong', songupload.fields([{
        name: 'songEmptyContentBtn1',
        maxCount: 1
    },
    {
        name: 'songEmptyContentBtn2',
        maxCount: 8
    }
]), productController.addSong); //Hoja para subir imagenes y mp3s de canciones con Multer 'songEmptyContentBtn'

router.get('/tienda', productController.tienda); //Tienda

router.get('/tienda/songs', productController.songs); //Te muestra todas las canciones 
router.get('/tienda/instruments', productController.instruments); //Te muestra todos las instrumentos 
router.get('/tienda/artists', productController.artists); //Te muestra todos los artistas
router.get('/tienda/search', productController.searched) //Todos los productos buscados

router.delete("/deleteinstrument/:idInstrum", productController.deleteInstrument)
router.delete("/deletesong/:idSong", productController.deleteSong)

router.get("/editsong/:idSong", productController.editSong) //pagina para editar cancion
router.get("/editinstrument/:idInstrum", productController.editInstrument) //pagina para editar instrumento

router.put("/editsong/:idSong", productController.editSongPut) // upload.single('songEmptyImgBtn'),
router.put("/editinstrument/:idInstrum", productController.editInstrumentPut)



module.exports = router