const Book = require("../models/newBookModel");

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
};

exports.bookList = async (req, res) => {
  try {
    const books = await Book.find({}, { bookName: 1, authorName: 1 });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
};

exports.getBooksInYear = async (req, res) => {
  try {
    const books = await Book.find({ year: req.body.year });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
};

exports.getParticularBooks = async (req, res) => {
  try {
    let data = req.body;
    const books = await Book.find(data);  
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
};

exports.getXINRBooks = async (req, res) => {
  try {
    const books = await Book.find({ 'price.indian': { $in: ['100INR', '200INR', '500INR'] } });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
};

exports.getRandomBooks = async (req, res) => {
  try {
    const books = await Book.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 300 } }] });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.send('Server Error');
  }
};
