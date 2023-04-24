let mongoose = require("mongoose");
let users = new mongoose.Schema({
    firstname:{
        type:String,
        require: true,
        minLength:3,
        maxLength:255,
    },
    lastname:{
        type:String,
        require: true,
        minLength:3,
        maxLength:255,
    },
    mobile:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require: true,
        minLength:6,
        maxLength:255,
    },
    password:{
        type:String,

        minLength:6,
        maxLength:255
    }

});
module.exports = mongoose.model("User",users);