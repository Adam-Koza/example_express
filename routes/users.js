var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/bob', function(req, res, next) {
  res.render('bob', { title: 'Bob\'s Page' });
});

module.exports = router;
