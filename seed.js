/* 
This file is just an example of how you might seed your database. 

In this example, the names and URLs of the contents of `/node_modules`
are stored in the database.
*/

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var mongoose = require('mongoose');
var startDb = require('./server/db');
var Nodemodule = require('./server/api/modules/nodemodule.model.js');
var Prompt = require('./server/api/prompts/prompt.model.js');
var chalk = require('chalk');

var moduleNamesArray;
var promptObjects = [
  {
    text: "A rusty pen",
    user: "Ash",
    rating: {
      upvotes: 4,
      downvotes: 3 
    }
  },
  {
    text: "Free fall",
    user: "R2D2",
    rating: {
      upvotes: 5,
      downvotes: 2
    }
  },
  {
    text: "The feel of the sun on your face",
    user: "Han",
    rating: {
      upvotes: 3,
      downvotes: 5
    }
  },
  {
    text: "The silence before dawn",
    user: "Leia",
    rating: {
      upvotes: 3,
      downvotes: 3
    }
  },
  {
    text: "A special gift",
    user: "C3P0",
    rating: {
      upvotes: 1,
      downvotes: 0
    }
  },
]

startDb
  .then(function() {
    Prompt.create(promptObjects[0]);
  })
  .then(function() {
    Prompt.create(promptObjects[1]);
  })
  .then(function() {
    Prompt.create(promptObjects[2]);
  })
  .then(function() {
    Prompt.create(promptObjects[3]);
  })
  .then(function() {
    Prompt.create(promptObjects[4]);
  })
  .then(function() {

  // Get all module names
  fs.readdirAsync(__dirname + '/node_modules/')
    // Get package.json content for all modules
    .then(function(moduleNames) {
      moduleNamesArray = moduleNames.filter(function(e) {
        return e !== ".bin";
      });
      
      return Promise.all(moduleNamesArray.map(function(module){
        return fs.readFileAsync(path.join(__dirname, '/node_modules/' + module + '/package.json'), {'encoding': 'utf8'});
      }));
    })
    // Parse json
    .then(function(files) {
      return Promise.all(files.map(function(file){
        return JSON.parse(file);
      }));
    })
    // Get repository urls
    .then(function(parsed) {
      return Promise.all(parsed.map(function(obj) {
        return obj.repository.url;
      }));
    })
    // Create model-compatible objects
    .then(function(repos) {
      return Promise.all(moduleNamesArray.map(function(e, i) {

        // Make url protocols consistent
        var url = urlCleaner(repos[i]);

        return {
          title: e,
          repoUrl: url
        };
      }));
    })
    // Write to the db and exit
    .then(function(moduleObjects) {
      moduleObjects.forEach(function(e) {
        Nodemodule.create(e)
          .then(function(){
            console.log(chalk.green('Database seeded. Goodbye!'));
            process.exit(0);
          });
      });
    });
});

function urlCleaner(url) {
 var start;
 var protocol;
 
 if (url.indexOf('https') === 0) return url;
 
 if (url.indexOf("://") > 0) {
    start = url.indexOf("://");
    protocol = url.slice(0, start);
    return "https" + url.slice(start);
 }
 else {
    start = url.indexOf(":") + 1;
    protocol = url.slice(0, start);
    return "https://" + url.slice(start);
 }
}