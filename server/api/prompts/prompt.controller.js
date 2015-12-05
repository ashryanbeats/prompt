var mongoose = require('mongoose');
var Prompt = require('./prompt.model');

module.exports = {
  index: function (req, res) {
    Prompt
      .find()
      .exec()
      .then(function(prompts) {
        res.send(prompts);
      });
 },
 create: function(req, res, next) {
    Prompt
      .create(req.body, function(err, prompt){
        if(err) return next(err);
        res.send(prompt);
      });
  } 
}

