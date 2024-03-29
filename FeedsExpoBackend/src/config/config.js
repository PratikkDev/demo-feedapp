const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
        const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/expo';
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectDB;
