const User = require("../models/user");
exports.get = async function(req,res){
    User.find({}).then(rs=>{
        res.render("list",{
            items:rs
        });
    }).catch(err=>{
        res.send(err);
    });
}
exports.create = (req,res)=>{
    res.render("create");
}
exports.save = (req,res)=>{
    let s = req.body;

    let newUser = new User(s);
    newUser.save().then(rs=>{
        res.redirect("/user/list");
    }).catch(err=>{
        res.send(err);
    })
};