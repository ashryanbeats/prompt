//'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  text: {
    type: String,
    maxlength: 50,
    required: true
  },
  user: {
    type: String
  },
  rating: {
  	upvotes: Number,
  	downvotes: Number
  },
  date: {
  	type: Date,
  	default: Date.now
  }
});

var Prompt = mongoose.model('Prompt', schema);

module.exports = Prompt;

