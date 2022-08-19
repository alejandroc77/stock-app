require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname,'public')))

/* app.get('/',(resq, res)=>{
    console.log('peticion recibida');
    res.status(200).sendFile('index.html',{root:__dirname});
}) */

const PORT = process.env.PORT || 4000
 
app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`);
})