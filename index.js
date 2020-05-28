require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongodb = require('./model/connection');
const routers = require('./router/routers');
const oauth = require('./router/Oauth');


// setup passport
require('./config/passport.setup');


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
app.use(morgan('dev'));

// oauth using passport
app.use(session({
  secret: 'Thisisthesecreatethenew',
  resave: true,
  saveUninitialized: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', routers);
app.use('/oauth', oauth);

app.listen(PORT, () => {
  console.log('Network URL:');
  console.log(`  http://localhost:${PORT}`);
  console.log(`  http://192.168.43.50:${PORT}`);
});
