require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

mongoose
  .connect(
    `mongodb+srv://Jordy:${process.env.MONGO_DB_PASS}@developer.rnd4oyz.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((resul) => {
    app.listen(PORT, () => {
      console.log(`Escuchando en el puerto ${PORT}`);
    });
    console.log("Conexion exitosa a la base de datos");
  })
  .catch((err) => console.log(`conexion fallida ${err}`));

app.use(express.static(path.join(__dirname, "public")));

/* app.get('/',(resq, res)=>{
    console.log('peticion recibida');
    res.status(200).sendFile('index.html',{root:__dirname});
    next()
}) */

const PORT = process.env.PORT || 4000;
