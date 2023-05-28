const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/User");
const DbConnection = require("./db/dbConnection.js");

const app = express();
const con = new DbConnection();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/hello", (req, res) => {
  try {
    res.send("¡Hola, mundo!");
  } catch (e) {
    console.log("Hubo un error panita");
  }
});

// Ruta de registro de usuarios
app.post("/register", (req, res) => {
  const { name, userName, email, password } = req.body;
  let user = new User(name, userName, email, password, new Date());
  res.send(user);
  res.json({ message: "Registro exitoso" });
});

const port = 3030;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
