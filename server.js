const express = require('express');
const server = express(); 
const path = require ('path');
server.listen (3001, () => {
    console.log ("Servidor rodando en puerto 3001")
});
server.get('/',(req,res)=>{
    res.send('Hola Mundo')
});

server.get('/Equipo1',(req,res)=>{
    res.send('Este es el mejor equipo de la clase. Por eso somos el equipo numero 1 ;-)')
});

server.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/home.html'))
});