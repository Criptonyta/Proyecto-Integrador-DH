const express = require('express');
const router = express.Router();
const {
    userController
} = require('../controllers/index');
const {
    multerMid,
    authMiddleware,
    authMiddlewareMe,
    expressValidatorMid
} = require("../middlewares/index");
const path = require('path');



router.get('/userprofile/:iduser', authMiddleware, authMiddlewareMe, userController.userprofile);
router.get('/viewuserprofile/:iduser', authMiddleware, userController.viewuserprofile);

router.get('/userprofile/:iduser/edit', authMiddleware, authMiddlewareMe, userController.userprofileEdit);
router.put('/userprofile/:iduser/edit', authMiddleware, authMiddlewareMe, multerMid.uploaduserProfileStorage.single('userAvatarButton'), expressValidatorMid.validacionesUserEdit, userController.userprofileEditNew);


router.get('/login', userController.login);
router.post('/login', expressValidatorMid.validacionesLogin, userController.loginpost);

router.get('/register', userController.register);
router.post('/register', multerMid.uploadRegister.single('userAvatarRegisterButton'), expressValidatorMid.validacionesRegister, userController.registerpost); // Para crear un nuevo usuario en register 
router.get("/logout/", userController.logout) //Hay que agregar el logout a la barra y pasarle el ID con session

router.delete('/mySongs/delete/:iduser?', authMiddleware, authMiddlewareMe, userController.deleteSongs) //Para eliminar varias canciones a la vez
router.delete('/myInstruments/delete/:iduser?', authMiddleware, authMiddlewareMe, userController.deleteInstruments) //Para eliminar varios instrumentos a la vez

router.get('/api/users/', userController.apiUserList) //Ruta de API de usuarios

router.get('/api/users/:id', userController.apiUserItem) //Ruta de API para 1 usuario

module.exports = router