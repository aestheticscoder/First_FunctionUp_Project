const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    publisher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher',
        required: true
    },
    isHardCover: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Book', bookSchema);