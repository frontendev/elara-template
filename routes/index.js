var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HTL Suica Hotel & Resort - Home' });
});
router.get('/contacto', function(req, res, next) {
  res.render('contact', { title: 'Contacto - HTL Suica Hotel & Resort' });
});

module.exports = router;
