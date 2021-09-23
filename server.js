const express = require('express');
const fs = require('fs');
const server = express();
const path = require('path');
const mainRoutes = require('./routes/mainRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const userRoutes = require('./routes/userRoutes')
const methodOverride = require('method-override')

server.set('view engine', 'ejs');


const port = process.env.PORT || '5000';
server.listen(port, () => {
    console.log(`Server is runnig in the Port : ${port}`);
});

server.use(express.static(path.resolve(__dirname, './public')));
server.use(express.urlencoded({extended: false}));
server.use(express.json());
server.use(methodOverride("_method"))

server.use('/', mainRoutes);
server.use('/products', productRoutes);
server.use('/cart', cartRoutes);
server.use('/user', userRoutes);
server.use((req, res, next) => {
    res.status(404).render("error404")
})