const express = require('express');
const server = express(); 
const path = require ('path');

// server.listen (3001, () => {
//     console.log ("Servidor rodando en puerto 3001")
// });

const port = process.env.PORT || '5000';
server.listen(port,()=>{
console.log(`Server is runnig in the Port : ${port}`);
});

server.use(express.static(path.resolve(__dirname,'./public')));

server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/home.html'))
});

server.get('/cart',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/cart.html'))
});

server.get('/cart1Alex',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/cart1Alex.html'))
});

server.get('/cart2Alex',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/cart2Alex.html'))
});

server.get('/cart3Alex',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/cart3Alex.html'))
});

server.get('/cart2',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/cart2.html'))
});

server.get('/cart3',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/cart3.html'))
});

server.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/login.html'))
});

server.get('/navbar',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/navbar.html'))
});

server.get('/product',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/product.html'))
});

server.get('/productempty',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/productempty.html'))
});

server.get('/songempty',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/songempty.html'))
});

server.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/register.html'))
});

server.get('/userprofile',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/userprofile.html'))
});

server.get('/tienda',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/tienda.html'))
});