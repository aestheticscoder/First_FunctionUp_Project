const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const bookModel = require("..//models/bookModel.js")
const UserController= require("../controllers/userController")
const BookController = require("../controllers/bookController.js")
const newBookController = require("../controllers/newBookController.js")
const newBookModel = require("../models/newBookModel.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
});



router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook)
router.get("/getBooksData", BookController.getBooksData)

router.post('/createNewBook', newBookController.createBook);
router.get('/bookList', newBookController.bookList);
router.post('/getBooksInYear', newBookController.getBooksInYear);
router.post('/getParticularBooks', newBookController.getParticularBooks);
router.get('/getXINRBooks', newBookController.getXINRBooks);
router.get('/getRandomBooks', newBookController.getRandomBooks);



module.exports = router;