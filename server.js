const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const keys = require('./config/keys');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI)

require('./routes/board')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
