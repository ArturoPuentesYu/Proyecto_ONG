const express = require("express");
const {MongoClient} = require("mongodb");
const cors = require("cors");
const url = "mongodb+srv://lectura:lectura1234@clusterprueba.esmqyee.mongodb.net/?retryWrites=true&w=majority";
const bbdd = "ong";

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
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
    cliente.close();
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

app.listen(3000, () => {console.log("Escuchando el puerto 3000")});
