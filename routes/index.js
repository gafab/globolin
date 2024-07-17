var express = require('express');
var router = express.Router();
let path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/newsletter', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/files/newsletter/portrait.pdf'));
});

router.get('/newsletter/portrait', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/files/newsletter/portrait.pdf'));
});
router.get('/newsletter/landscape', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/files/newsletter/landscape.pdf'));
});

module.exports = router;
