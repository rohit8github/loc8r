var express = require('express');
var router = express.Router();

// var homepageController = function(req, res, next) {
  // res.render('index', { title: 'MEAN stack' });
// };
var ctrlMain= require('../controllers/main');
/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
