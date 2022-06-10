var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    file: 'index'
  }
  res.render('base', data);
});
router.get('/skills', function(req, res, next) {
  var data = {
    file: 'skills'
  }
  res.render('base', data);
});
router.get('/occupation', function(req, res, next) {
  var data = {
    file: 'occupation'
  }
  res.render('base', data);
});

module.exports = router;
