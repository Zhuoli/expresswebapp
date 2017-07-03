var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web Home page' });
});
/* GET stock page. */
router.get('/cstock', function(req, res, next) {
  res.render('cstock', { title: 'ChineseStockMarket' });
});
module.exports = router;
