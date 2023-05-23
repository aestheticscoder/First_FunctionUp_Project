
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: 'author',
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
    publisher: {
        type: ObjectId,
        ref: 'publisher',
        required: true
    },
    isHardCover: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Book', bookSchema);