const express = require("express")
const serverless = require("serverless-http")
const router =  express.Router()
const app = express();
const path = require('path');
const ejs = require('ejs');
let people = ['geddy', 'neil', 'alex'];


app.use(express.static(path.join(__dirname, 'public')));

// app.set('views', path.join(__dirname, "views")); 
app.set('view engine', 'ejs');

router.get("/", function(req, res){
    res.render("index", {people:people})
})

router.get("/birds", (req, res) =>{
    res.send("worked")
})

router.get("*", (req, res) =>{
    res.send("hend")
})
app.use("/",   router)

module.exports.handler = serverless(app)