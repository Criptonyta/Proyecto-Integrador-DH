const express = require('express');
const { appendFile } = require('fs');
const server = express(); 
server.set('view engine', 'ejs');

const path = require ('path');

const mainRoutes = require('./routes/mainRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const userRoutes = require('./routes/userRoutes')

// server.listen (3001, () => {
//     console.log ("Servidor rodando en puerto 3001")
// });

const port = process.env.PORT || '5000';
server.listen(port,()=>{
console.log(`Server is runnig in the Port : ${port}`);
});

server.use(express.static(path.resolve(__dirname,'./public')));


server.use('/', mainRoutes);
server.use('/products', productRoutes);
server.use('/cart', cartRoutes);
server.use('/user', userRoutes);


// server.get('/',(req,res)=>{
//     res.render('home.ejs')
// });

// server.get('/cart1',(req,res)=>{
//     res.render('cart1.ejs')
// });

// server.get('/cart2',(req,res)=>{
//     res.render('cart2.ejs')
// });

// server.get('/cart3',(req,res)=>{
//     res.render('cart3.ejs')
// });

// server.get('/login',(req,res)=>{
//     res.render('login.ejs')
// });

// server.get('/navbar',(req,res)=>{
//     res.render('navbar.ejs')
// });

// server.get('/product',(req,res)=>{
//     res.render('product.ejs')
// });

// server.get('/productempty',(req,res)=>{
//     res.render('productempty.ejs')
// });

// server.get('/songempty',(req,res)=>{
//     res.render('songempty.ejs')
// });

// server.get('/register',(req,res)=>{
//     res.render('register.ejs')
// });

// server.get('/userprofile',(req,res)=>{
//     res.render('userprofile.ejs')
// });

// server.get('/tienda',(req,res)=>{
//     res.render('tienda.ejs')
// });