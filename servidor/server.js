const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require("bcrypt");
const url = "mongodb+srv://lectura:lectura1234@clusterprueba.esmqyee.mongodb.net/?retryWrites=true&w=majority";
const bbdd = "ong";
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes POST
app.use(bodyParser.json());

app.get("/", async (req, res) => {
    console.log("GET");
    const cliente = new MongoClient(url);
    let t = "";
    try {
        await cliente.connect();
        console.log("Conectado a la base de datos");
        t = await cliente.db(bbdd).collection("inicio").find({}).toArray();
    } catch (error) {
        console.log(error);
    }
    res.send(t);
    console.log(t);
    console.log("contenido enviado");
    cliente.close();
});

app.put("/", async (req, res) => {

    const descripcion = req.body.texto;
    const cliente = new MongoClient(url);
    let t = "";
    try {
        await cliente.connect();
        console.log("Conectado a la base de datos");
        if (req.body.seccion != null && req.body.item != null) {
            let string = "SECCIONES." + req.body.seccion + ".items." + req.body.item + ".descripcion";
            console.log(string);
            t = await cliente.db(bbdd).collection("inicio").updateOne({ }, {$set: {[string]: descripcion}});
        } else {
            t = await cliente.db(bbdd).collection("inicio").updateOne({ }, {$set: {"INICIO.TEXTO_ONG": descripcion}});
        }
        console.log(t);
    } catch (error) {
        console.log(error);
    }
});

app.get("/quienes_somos", async (req, res) => {
    const cliente = new MongoClient(url);
    let t = "";
    try {
        await cliente.connect();
        console.log("Conectado a la base de datos");
        t = await cliente.db(bbdd).collection("quienes_somos").find({}).toArray();
        console.log(t);
    } catch (error) {
        console.log(error);
    }
    res.send(t);
    cliente.close();
});

/*app.get('/admin', verificarToken, (req, res) => {
    res.send("Bienvenido al panel de administración");
});
// Define un esquema y modelo para los usuarios
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});
const User = mongoose.model('User', userSchema);*/

app.post('/login', async (req, res) => {
    // Intenta encontrar un usuario en la base de datos que coincida con el correo electrónico proporcionado
    let user = null;
    try {
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(bbdd);
        const collection = db.collection("user");
        user = await collection.findOne({ email: req.body.email });
    } catch (error) {
    }
    // Si se encuentra un usuario con el correo electrónico proporcionado...
    if (user !== null) {
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if (validPassword) {
            const token = jwt.sign({ id: user._id }, 'tuSecretSuperSecreto', { expiresIn: '1h' });
            res.status(200).json({ message: "Login exitoso", token, ok: true });
        } else {
            res.status(400).json({ error: "Contraseña incorrecta", ok: false });
        }
    } else {
        res.status(404).json({ error: "Usuario no encontrado", ok: false });
    }
});




const verificarToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer Token

    if (!token) {
        return res.status(403).send({ message: "Se requiere un token para autenticación" });
    }

    try {
        const decoded = jwt.verify(token, 'tuSecretSuperSecreto');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send({ message: "Token inválido" });
    }
};

// Datos del usuario a registrar
const email = 'usuario@example.com';
const password = 'password123';

const registerUser = async (email, password) => {
  const client = new MongoClient(url);

  try {
    // Conectar al servidor MongoDB
    await client.connect();
    console.log('Conectado correctamente a MongoDB');

    const db = client.db(bbdd);
    const collection = db.collection("user");

    // Hashear la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar el nuevo usuario en la base de datos
    const result = await collection.insertOne({
      email,
      password: hashedPassword
    });

    console.log(`Nuevo usuario registrado con el ID: ${result.insertedId}`);
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
  } finally {
    // Cerrar la conexión al servidor
    await client.close();
  }
};

app.listen(3000, () => { console.log("Escuchando el puerto 3000") });
