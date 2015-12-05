var mongoose = require('mongoose');
var Prompt = require('./prompt.model');

module.exports = {
  
  index: function(req, res) {
    console.log('index api hit');
    Prompt
      .find()
      .exec()
      .then(function(prompts) {
        res.send(prompts);
      });
  },

  random: function(req, res)  {
    console.log('random api hit');
    Prompt
      .find()
      .exec()
      .then(function(prompts) {
        let random = Math.floor(Math.random() * prompts.length);
        res.send(prompts[random]);
      })
  },

  create: function(req, res, next) {
    console.log("hi POST /");
    Prompt
      .create(req.body, function(err, prompt){
        if(err) return next(err);
        res.send(prompt);
      });
  } 
}

