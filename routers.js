const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
    const Cat = mongoose.model('Cat', {
        name: String,
        age: Number,
        views: Number,
    });
    const ress = Cat.find();
    res.json({ msg: ress });
    //   console.log(ress);
});

module.exports = router;
