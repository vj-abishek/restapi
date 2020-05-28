const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema({
    username: String,
    email: String,
    thumbnail: String,
    googleId: String,
});

const User = mongoose.model('user', user);
module.exports = User;
