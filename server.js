const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const keys = require('./config/keys');

const app = express();
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI)

require('./routes/board')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js/main.css file
  app.use(express.static('client/build'));

  // Express will serve up index.html if
  // doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
