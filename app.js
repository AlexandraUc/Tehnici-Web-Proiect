const express = require("express");
const app = express();
//const path = require("path");

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/magazin.html");
});

app.post("/output.html", function(req, res){
    const prenume = req.body.prenume;
    const nume = req.body.nume;
    const email = req.body.email;
    const motiv = req.body["selector-motiv"];
    const mesaj = req.body.mesaj;

    res.render("output.ejs", {prenume:prenume, nume: nume, email: email, motiv: motiv, mesaj: mesaj});
});

app.use(express.static(__dirname));

app.use((req, res, next) => {
    res.status(404).send("<h1>404 - Page not found</h1>");
});

app.listen(3000, function(){
    console.log("A pornit serverul");
});