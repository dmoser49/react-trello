const mongoose = require('mongoose');
const { Schema } = mongoose;

const BoardSchema = new Schema({
  lapLanes: {type: Array, "default": []},
});

module.exports = mongoose.model('Board', BoardSchema);
