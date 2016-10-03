var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wanderly');

var Experience = require('./experiences');
module.exports.Experience = Experience;

var User = require('./users');
module.exports.User = User;
