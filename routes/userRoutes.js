const express = require('express');
const router = express.Router();
const {
    userController
} = require('../controllers/index');
const {
    multerMid
} = require("../middlewares/index");
const path = require('path');



router.get('/userprofile/:iduser', userController.userprofile);
router.get('/viewuserprofile/:iduser', userController.viewuserprofile);

router.get('/userprofile/:iduser/edit', userController.userprofileEdit);
router.put('/userprofile/:iduser/edit', multerMid.uploaduserProfileStorage.single('userAvatarButton'), userController.userprofileEditNew);


router.get('/login', userController.login);

router.get('/register', userController.register);
router.post('/register', multerMid.uploadRegister.single('userAvatarRegisterButton'), userController.registerpost); // Para crear un nuevo usuario en register 

router.delete('/mySongs/delete', userController.deleteSongs) //Para eliminar varias canciones a la vez
router.delete('/myInstruments/delete', userController.deleteInstruments) //Para eliminar varios instrumentos a la vez



module.exports = router