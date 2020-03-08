var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/program", (req,res) => {
    res.render("program");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req,res) => {
    res.render("contact")
})
app.listen(3000, function(){
    console.log("The sedam server has started");
});