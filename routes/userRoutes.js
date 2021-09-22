const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/userprofile/:iduser', userController.userprofile);

router.get('/login', userController.login);

router.get('/register', userController.register);

module.exports = router