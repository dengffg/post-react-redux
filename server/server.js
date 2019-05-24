const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {
    console.log('database is connected');
  },
  err => {
    console.log('can not connect to the database' + err);
  }
);

const postroutes = require('./routes/PostRoute');

app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/posts', postroutes);

app.listen(port, function() {
  console.log('Listening on port' + port);
});
