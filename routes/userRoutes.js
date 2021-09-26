const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/userprofile/:iduser', userController.userprofile);
router.get('/viewuserprofile/:iduser', userController.viewuserprofile);

router.get('/userprofile/:iduser/edit', userController.userprofileEdit);
router.put('/userprofile/:iduser/edit', userController.userprofileEditNew);

router.get('/login', userController.login);

router.get('/register', userController.register);

router.delete('/mySongs/delete',userController.deleteSongs)
router.delete('/myInstruments/delete',userController.deleteInstruments)

module.exports = router