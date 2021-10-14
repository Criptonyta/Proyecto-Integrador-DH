const express = require('express');
const router = express.Router();
const {
    authMiddleware,
    authMiddlewareMe
} = require('../middlewares/index')
const {
    cartController
} = require('../controllers/index');


router.get('/cart1', authMiddleware, authMiddlewareMe, cartController.cart1);
router.get('/cart2', authMiddleware, authMiddlewareMe, cartController.cart2);
router.get('/cart3', authMiddleware, authMiddlewareMe, cartController.cart3);

module.exports = router