require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

mongoose
  .connect(
    `mongodb+srv://Jordy:${process.env.MONGO_DB_PASS}@developer.rnd4oyz.mongodb.net/stock-jordy?retryWrites=true&w=majority`
  )
  .then((resul) => {
    app.listen(PORT, () => {
      console.log(`Escuchando en el puerto ${PORT}`);
    });
    console.log("Conexion exitosa a la base de datos");
  })
  .catch((err) => console.log(`conexion fallida ${err}`));

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    number: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Products", productSchema);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/api/v1/products",  (req, res) => {
  /* console.log("peticion recibida");
  console.log({ body: req.body });
  */ /* next(); */
  const newProduct = new Product(req.body);

   newProduct
    .save()
    .then((resul) => {
      res.status(201).json({ ok: true });
    })
    .catch((err) => console.log(err));
});

/*  res.status(200).sendFile('index.html',{root:__dirname}); */
const PORT = process.env.PORT || 4000;
