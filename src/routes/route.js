const express = require('express');
const router = express.Router();
const  { validation } = require("../models/Middlewares/auth");

const userController = require("../controllers/userController");
const userModel = require('../models/userModel');

router.post("/createUser", userController.createUser);
router.post("/loginUser", userController.loginUser);
router.get("/getUserData/:userId", validation, userController.getUserData);
router.put("/updateUser/:userId", validation, userController.updateUser);
router.delete("/deleteUser/:userId", validation, userController.deleteUser);



module.exports = router;
