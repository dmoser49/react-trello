// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we're in prod - return prod set of keys
  module.exports = require('./prod');
} else {
  // we're in dev - return dev keys!!!
  module.exports = require('./dev');
}
