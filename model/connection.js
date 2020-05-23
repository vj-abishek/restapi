const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;
