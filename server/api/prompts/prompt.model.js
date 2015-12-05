//'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  text: {
    type: String,
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

var NodeModule = mongoose.model('Nodemodule', schema);

module.exports = NodeModule;

