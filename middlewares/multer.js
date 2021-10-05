const multer = require("multer")

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
const songupload = multer({storage: contentstorage}) // Variable de ejecucion


module.exports = {songupload}