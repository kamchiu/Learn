var mongoose = require('mongoose');
var movieSchema = require('../schemas/movie');
var movie = mongoose.model('moive',movieSchema);

module.exports = movie;
