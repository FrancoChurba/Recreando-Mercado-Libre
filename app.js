const express = require('express');
const app = express();
const path = require('path')
app.use(express.static('/public'));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.listen(process.env.PORT || 3000,function(){
    console.log('Servidor funcionando');
});