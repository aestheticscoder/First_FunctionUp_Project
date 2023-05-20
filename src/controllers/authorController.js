const authorModel = require("../models/authorModel")
const bookModel = require('../models/bookModel')


const createAuthor = async function(req,res){
    let allAuthor = await authorModel.create(req.body)
    res.send({msg : allAuthor})
}
module.exports.createAuthor = createAuthor

const findBook = async function(req,res){
    let id_findBook = await authorModel.findOne({author_name : "Chetan Bhagat"})
    let allBooks = await bookModel.find()
    let result = allBooks.filter(x=>x.author_id === id_findBook.author_id)
    res.send({msg : result , status : true})
}
module.exports.findBook = findBook

const findAuthor = async function(req,res){
    let findTwoStatesAuthor = await bookModel.findOneAndUpdate(
        {name : "Two states"},
        {$set : {price : 100}},
        {new: true}
    )
    let authorName = (await authorModel.find()).find(x=>x.author_id === findTwoStatesAuthor.author_id)
    res.send({author : authorName.author_name, book : findTwoStatesAuthor})
}
module.exports.findAuthor = findAuthor

const findBookByPrice = async function(req,res){
    let allAuthor = await authorModel.find()
    let Price50To100 = await bookModel.find({price : {$gte : 50, $lte : 100}}).select({author_id : true})
    let authorNameBook = Price50To100.map(x=>{ 
        return (allAuthor.find(y=>y.author_id === x.author_id )).author_name
    })
    res.send({msg : authorNameBook})

}
module.exports.findBookByPrice = findBookByPrice
