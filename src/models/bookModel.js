const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  authorName: { type: String, required: true },
  category: { type: String, required: true },
  year: { type: Number, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
