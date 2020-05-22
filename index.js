const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routers = require('./routers');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},() => console.log('Connected to the db'));

// const Cat = mongoose.model('Cat', { name: String, age: Number });

// const kitty = new Cat({ name: 'Zildjian',age:18 });
// kitty.save().then(() => console.log('meow'));


const app = express();

// middlewares

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', routers);

app.listen(3000, () => console.log('Server running at port 3000'));
