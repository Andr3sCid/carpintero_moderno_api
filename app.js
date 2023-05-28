const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/User");
const DbConnection = require("./db/dbConnection.js");
const { ObjectId } = require("mongodb");

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
app.post("/user/register/insertIn", (req, res) => {
  try {
    const { name, userName, email, password } = req.body;
    let user = new User(ObjectId ,name, userName, email, password, new Date());
    con.createUser(user);
    res.json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
});

app.post("/user/findUserName", async (req, res) => {
  try {
    const {userName}   = req.body;
    res.send(await con.getUserByUserName(userName));
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
});

app.post("/user/login", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await con.getUserByUserName(userName);

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});


const port = 3030;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
