const express = require('express')

const app = express()

app.get('/',(resq, res)=>{
    console.log('peticion recibida');
    res.status(200).send('<h2>Hola mundo con nodemon <h2>');
})

app.listen(4000, ()=>{
    console.log("Servidor escuchando en el puerto 4000")
})