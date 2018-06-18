const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const keys = require('./config/keys');

const app = express();
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI)

require('./routes/board')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${port}`));
