const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId; // set type as an ObjectId to reference other documents.

const postSchema = Schema({
    username: {
        type: String,
        required: true,
        // unique: true,
        dropDups: true
    },
    text: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('posts', postSchema);