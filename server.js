const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const server = express();
const path = require('path');
const {
    authMiddleware
} = require('./middlewares/index')
const cors = require ("cors")

//ROUTES
const mainRoutes = require('./routes/mainRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const userRoutes = require('./routes/userRoutes')
const methodOverride = require('method-override')
const expressSession = require('express-session')

server.use(cors())
server.set('view engine', 'ejs');

const port = process.env.PORT || '5000';
server.listen(port, () => {
    console.log(`Server is runnig in the Port : ${port}`);
});

server.use(express.static(path.resolve(__dirname, './public'))); //Carpeta estatica
server.use(express.urlencoded({
    extended: false
})); //Para usar POST
server.use(express.json()); //Para usar POST
server.use(methodOverride("_method")) //Para usar PUT y DELETE

server.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    //    cookie: { secure: true }
})) // Para usar session

server.use(cookieParser());

server.use('/', mainRoutes);
server.use('/products', productRoutes);
server.use('/cart', cartRoutes);
server.use('/user', userRoutes);
server.use((req, res, next) => {
    res.status(404).render("error404")
})