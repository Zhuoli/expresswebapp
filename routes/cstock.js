var express = require('express');
var router = express.Router();

/* GET stock page. */
router.get('/', function(req, res, next) {
  res.render('cstock', { title: 'ChineseStockMarket' });
});

module.exports = router;
