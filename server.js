const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const Board = require('./models/Board');

const app = express();
// const router = express.Router();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}))


mongoose.connect(keys.mongoURI)
  .then(() => console.log('connection successful'));

app.get('/', function(req, res, next) {
  console.log('test test')
  Board.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
    console.log(products)
  });
});


app.get('/api/hello', (req, res) => {
  console.log('herro')
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
