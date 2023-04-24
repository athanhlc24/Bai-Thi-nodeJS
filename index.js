
require("dotenv").config();
const PORT = process.env.PORT || 3333;

const express = require("express");
const app  = express();
const database = require("./src/database");
const User = require("./src/models/user");


app.listen(PORT,()=>{
    console.log("Server is running...");
})

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const session = require("express-session");

const userRoute = require("./src/routes/user.route");
app.use("/user",userRoute)

app.get("/",function (req,res){
    res.render("home");
});