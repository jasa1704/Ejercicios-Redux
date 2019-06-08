var express = require("express");
var app = express();
app.get("/", (req, res)=>{
    res.send('Estoy triunfando!! Mamá');
});
app.get("/bootcamp", (req,res)=>{
    res.send("hoy hay champin.");
});
app.listen(3000, ()=>{
    console.log("Servidor escuchando en el puerto 3000");
});