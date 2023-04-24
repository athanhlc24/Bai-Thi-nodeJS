const express = require("express");
let router = express.Router();
const User = require("../models/user");
let userController = require("../controllers/user.controller")

router.get("/list",userController.get);
router.get("/create",userController.create);
router.post("/create",userController.save);
module.exports = router;