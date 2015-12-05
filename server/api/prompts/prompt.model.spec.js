var dbURI = 'mongodb://localhost:27017/meaniscule-app-tests';
var clearDB = require('mocha-mongoose')(dbURI);

var expect = require('chai').expect;
var Promise = require('bluebird');
var mongoose = require('mongoose');

var Prompt = require('./prompt.model.js');

describe('Prompt model', function () {
  before('Connect to db', function (done) {
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done);
  });

  after('Clear test database', function (done) {
    clearDB(done);
  });

  it('should exist', function () {
      expect(Prompt).to.be.a('function');
  });

  describe('Prompt creation', function() {

    it('should create a prompt in the db', function(done){

      Prompt.create({ text: "Hi!"})
        .then(function(data) {
          Prompt.findById(data).exec()
            .then(function(data) {
              expect(data).to.be.a('object');
              done();
            })
            .then(null, done);
        });
    });  
      
  });
});
