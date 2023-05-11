const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const newController = require("../controllers/newController");
const { authenticateToken } = require("../models/Middlewares/middleware");
const { authMiddleware } = require("../models/Middlewares/authmiddleware");
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

//Updated Assignment 10th May 2023
router.post("/newusers", newController.registerUser  )
router.post("/loginUser", newController.loginUser  )
router.get("/users/:userId", authMiddleware, newController.getUserDetails )
router.put("/users/:userId", authMiddleware,  newController.updateUserDetails )
router.delete("/users/:userId", authMiddleware, newController.deleteUserDetails)
module.exports = router;