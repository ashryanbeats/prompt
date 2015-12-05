var router = require('express').Router();

var controller = require('./prompt.controller.js');

module.exports = router;

router.get('/', controller.index);

router.get('/random', controller.random);

router.post('/', controller.create);
