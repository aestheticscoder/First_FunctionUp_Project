const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    const { name, authorId, publisherId, price, ratings , isHardCover} = req.body;

    const author = await authorModel.findById(authorId);
    const publisher = await publisherModel.findById(publisherId);

    if (!author || !publisher) {
      return res.status(400).json({ error: 'Author or publisher not found' });
    }

    const book = new bookModel({
      name,
      authorId,
      publisherId,
      price,
      ratings,
      isHardCover
    });

    await book.save();

    return res.status(201).json({ message: 'Book created successfully', book });
}

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({ data: specificBook })
}

const updateBooks = async (req, res) => {
    try {
        // Add a new boolean attribute in the book schema called isHardCover with a default false value
        const hardCoverPublishers = ['Penguin', 'HarperCollins'];
        const updatePromises = [];

        // For the books published by 'Penguin' and 'HarperCollins', update the isHardCover key to true
        updatePromises.push(bookModel.updateMany({ publisher: { $in: hardCoverPublishers } }, { $set: { isHardCover: true } }));

        // For the books written by authors having a rating greater than 3.5, update the books price by 10
        const booksToUpdate = await bookModel.find({ authorRating: { $gt: 3.5 } });
        for (const book of booksToUpdate) {
            book.price += 10;
            updatePromises.push(book.save());
        }

        // Wait for all update operations to complete
        await Promise.all(updatePromises);

        res.status(200).json({ message: 'Books updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBooks = updateBooks