var mongoose = require('mongoose');
var Prompt = require('./prompt.model');

module.exports = {
  
  index: function(req, res) {
    Prompt
      .find()
      .exec()
      .then(function(prompts) {
        res.send(prompts);
      });
  },

  random: function(req, res)  {
    Prompt
      .find()
      .exec()
      .then(function(prompts) {
        let random = Math.floor(Math.random() * prompts.length);
        res.send(prompts[random]);
      })
  },

  create: function(req, res) {
    Prompt
      .create(req.body, function(err, prompt){
        if(err) return next(err);
        res.send(prompt);
      });
  } 
}

