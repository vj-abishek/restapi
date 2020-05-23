const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');
const mongodb = require('./model/connection');
const routers = require('./router/routers');

const app = express();
const PORT = 3030 || process.env.PORT;
require('dotenv').config();

// Checking the connection
mongodb.connection
  .on('open', () => console.log('Successfully connected to the db'))
  .once('error', (err) => console.log('An error occured', err));

// middlewares
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', routers);

app.listen(PORT, () => console.log('Server running at port ', PORT));
