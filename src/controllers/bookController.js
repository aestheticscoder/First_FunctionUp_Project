const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const ObjectId = require('mongoose').Types.ObjectId
const mongoose= require('mongoose');

const createBook = async function(req,res){
    let data = req.body
    if(ObjectId.isValid(data.publisher) && ObjectId.isValid(data.author)){
        if(await authorModel.findById(data.author) && await publisherModel.findById(data.publisher)){
        let CreatedBook  = await bookModel.create(req.body)
        return res.send({book : CreatedBook})
        }
        else{
           return res.send("Author/publisher is not Present")
        }
    }
    else{
        return res.send("Error found in Book Data")
    }

}

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({ data: specificBook })
}

const hardCoverStatus = async function(req,res){
    const publisherId = await publisherModel.find({name :{$in : ["Penguin", "HarperCollins"]}}).select({_Id : true})
    let arr = []
    for(let i = 0; i < publisherId.length; i++){
        arr.push(publisherId[i]._id)
    }
        const allBooks = await bookModel.updateMany(
            {publisher : {$in : arr}},
            {$set : {isHardCover : true}},
            {new : true}
        )
        const showAllBooks = await bookModel.find().populate({path:'publisher', match :{'publisher.name': {$in : ['Penguin','HarperCollins']}}})
    res.send({msg : allBooks, updatedData : showAllBooks})
}

const UpdatePrice = async function(req,res){
    const allData = await authorModel.find({rating : {$gte : 3.5}}).select({_Id : true})
    let arr = []
    for(let i = 0; i < allData.length; i++){
        arr.push(allData[i]._id)
    }
    const allBooks = await bookModel.updateMany(
        {author : {$in : arr}},
        {$inc : {price  :  10}},
        {new : true}
    )
    const allBooksShow = await bookModel.find().populate({path:'author', match :{'author.rating': {$gt : 3.5}}})
    res.send({msg:allBooks, UpdatePriceDaTA : allBooksShow})
}
module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.hardCoverStatus = hardCoverStatus
module.exports.UpdatePrice = UpdatePrice