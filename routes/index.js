var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});
router.get('/skills', function(req, res, next) {
  res.render('index', {});
});
router.get('/occupation', function(req, res, next) {
  res.render('index', {});
});

module.exports = router;
