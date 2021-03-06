const multer = require("multer")
const path = require("path")

//Permite al usuario cargar su cancion con multer en un proceso BATCH (subida manual a Youtube)
const contentstorage = multer.diskStorage({ // Configura el almacenamiento  || 'audio/mp3' || 'audio/wav' || 'audio/flac'
    destination: function (req, file, cb) {
        if (file.fieldname == "songEmptyContentBtn1" || file.fieldname == "songEmptyContentBtn2") //Caso cargar cancion POST
            if (file.mimetype == 'audio/mpeg') {
                cb(null, path.join(__dirname, '../public/batchSongs'))
            }
        else {
            cb(null, path.join(__dirname, '../public/images/MusicFilesCoverImg/resized'))
        } else if (file.fieldname == "productEmptyButton") {
            cb(null, path.join(__dirname, '../public/images/instrumentsImg/resizedandcropped'))
        } //Caso cargar instrumento POST
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})
const upload = multer({
    storage: contentstorage
}) // Variable de ejecucion




// Permite al usuario cargar una imagen de perfil (avatar) desde la vista REGISTER
const registerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/usersAvatars/resizedandcropped'))
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})

const uploadRegister = multer({
    storage: registerStorage
})



//Permite al usuario cargar su avatar con multer desde USERPROFILE
const userProfileStorage = multer.diskStorage({ // Configura el almacenamiento
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/usersAvatars/resizedandcropped'))
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})
const uploaduserProfileStorage = multer({
    storage: userProfileStorage
}) // Variable de ejecucion


module.exports = {
    upload, // Sube una cancion desde details
    uploadRegister, // Sube el avatar desde register
    uploaduserProfileStorage // Sube el avatar desde UserProfile Update
}