var mongoose = require('mongoose');

var model;

try {
    model = mongoose.model('configs') || require('./model');
} catch (e) {
    model = require('./model');
}

module.exports = model;