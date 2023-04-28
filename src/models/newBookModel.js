const mongoose = require('mongoose');

const newBookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true
  },
  price: {
    indian: {
      type: String,
      required: true
    },
    european: {
      type: String,
      required: true
    }
  },
  year: {
    type: Number,
    default: 2021
  },
  tags: {
    type: [String],
    required: false
  },
  authorName: {
    type: String,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  stockAvailable: {
    type: Boolean,
    default: true
  }
});

const NewBook = mongoose.model('NewBook', newBookSchema);

module.exports = NewBook;
