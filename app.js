require('dotenv').config()
const express = require('express')

const app = express()

app.get('/',(resq, res)=>{
    console.log('peticion recibida');
    res.status(200).send('<h2>Hola mundo! con git y nodemon y un cambio mas<h2>');
})

const PORT = process.env.PORT || 4000
 
app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`);
})