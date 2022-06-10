var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects/list', {});
});
router.get('/whack-a-mole', function(req, res, next) {
  res.render('projects/mogura_tataki', {});
});
router.get('/slot', function(req, res, next) {
  res.render('projects/slot_machine', {});
});

module.exports = router;
