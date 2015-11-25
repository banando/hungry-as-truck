var mongoose = require('mongoose');

var env = require('./environment');

mongoose.connect(env.MONGO_URI);

module.exports = mongoose;
