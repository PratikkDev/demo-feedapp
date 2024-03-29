const mongoose = require('mongoose');
require('dotenv').config()
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        get: (image) => process.env.PROJECT_PATH + "/image/" + image
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        toObject: {
            getters: true,
            setter: true,
        },
        toJSON: {
            getters: true,
            setter: true,
        }
    }
);



const Post = mongoose.model('Post', postSchema);

module.exports = Post;
