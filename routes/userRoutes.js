const express = require('express');
const router = express.Router();
const {
    userController
} = require('../controllers/index');
const multer = require('multer');
const path = require('path');



//Permite al usuario cargar su avatar con multer
const storage = multer.diskStorage({ // Configura el almacenamiento
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/usersAvatars/resizedandcropped'))
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})
const uploadFile = multer({
    storage
}) // Variable de ejecucion



router.get('/userprofile/:iduser', userController.userprofile);
router.get('/viewuserprofile/:iduser', userController.viewuserprofile);

router.get('/userprofile/:iduser/edit', userController.userprofileEdit);
router.put('/userprofile/:iduser/edit', uploadFile.single('userAvatarButton'), userController.userprofileEditNew);


router.get('/login', userController.login);

router.get('/register', userController.register);

router.delete('/mySongs/delete', userController.deleteSongs) //Para eliminar varias canciones a la vez
router.delete('/myInstruments/delete', userController.deleteInstruments) //Para eliminar varios instrumentos a la vez



module.exports = router