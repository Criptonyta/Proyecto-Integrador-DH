const express = require('express');
const server = express();
const router = express.Router();
const path = require("path")

//RUTAS PATH
const cartRoutes = require(path.join(__dirname,"./cartRoutes"))
const mainRoutes = require(path.join(__dirname,"./mainRoutes"))
const productRoutes = require(path.join(__dirname,"./productRoutes"))
const userRoutes = require(path.join(__dirname,"./userRoutes"))

router.use('/', mainRoutes);
router.use('/products', productRoutes);
router.use('/cart', cartRoutes);
router.use('/user', userRoutes);

module.exports = {router}