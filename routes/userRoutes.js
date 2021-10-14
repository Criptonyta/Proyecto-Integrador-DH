const express = require('express');
const router = express.Router();
const {
    userController
} = require('../controllers/index');
const {
    multerMid,
    authMiddleware,
    authMiddlewareMe,
} = require("../middlewares/index");
const path = require('path');



router.get('/userprofile/:iduser', authMiddleware, authMiddlewareMe, userController.userprofile);
router.get('/viewuserprofile/:iduser', userController.viewuserprofile);

router.get('/userprofile/:iduser/edit', authMiddleware, authMiddlewareMe, userController.userprofileEdit);
router.put('/userprofile/:iduser/edit', authMiddleware, authMiddlewareMe, multerMid.uploaduserProfileStorage.single('userAvatarButton'), userController.userprofileEditNew);


router.get('/login', userController.login);
router.post('/login', userController.loginpost);

router.get('/register', userController.register);
router.post('/register', multerMid.uploadRegister.single('userAvatarRegisterButton'), userController.registerpost); // Para crear un nuevo usuario en register 

router.delete('/mySongs/delete', authMiddleware, authMiddlewareMe, userController.deleteSongs) //Para eliminar varias canciones a la vez
router.delete('/myInstruments/delete', authMiddleware, authMiddlewareMe, userController.deleteInstruments) //Para eliminar varios instrumentos a la vez



module.exports = router