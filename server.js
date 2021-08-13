const express = require('express');
const server = express(); 
const path = require ('path');

server.listen (3001, () => {
    console.log ("Servidor rodando en puerto 3001")
});

server.use(express.static(path.resolve(__dirname,'./public')));

server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/home.html'))
});

server.get('/cart',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/cart.html'))
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

server.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/register.html'))
});

server.get('/tienda',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/tienda.html'))
});