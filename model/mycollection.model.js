const mongoose = require('mongoose');

const { Schema } = mongoose;

const mycollection = new Schema({
    name: String,
    email: String,
    courseCount: Number,
});

const mymodel = mongoose.model('mycollection', mycollection);
module.exports = mymodel;
