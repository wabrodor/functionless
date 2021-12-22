const express = require("express")
const serverless = require("serverless-http")
const router =  express.Router()
const app = express();
const fetch = require('node-fetch');
const path = require('path');
const ejs = require('ejs');
let people = ['geddy', 'neil', 'alex'];

app.use(express.static( "./public"))
app.set('../views',  path.join(__dirname, "views")); 
app.set('view engine', 'ejs');

router.get("/", async  (req, res)=>{
    try{
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers:{
      Accept:"application/json "
            }
        })
        const data = await response.json()
        res.render("index.ejs", {people:data})
    }catch (error) {console.log(error)}


})

router.get("/birds", (req, res) =>{
    res.send("worked")
})

// router.get("*", (req, res) =>{
//     res.send("hend")
// })
app.use("/",   router)

module.exports.handler = serverless(app)