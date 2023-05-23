const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('author', authorSchema);