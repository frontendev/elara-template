var express = require('express');
var router = express.Router();

/* Home. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HTL Suica Hotel & Resort - Home' });
});

/* Service */
router.get('/servicios', function(req, res, next) {
  res.render('service', { title: 'Servicios - HTL Suica Hotel & Resort'});
});

/* Promos */
router.get('/promociones', function(req, res, next) {
  res.render('promos', { title: 'Promociones - HTL Suica Hotel & Resort'});
});

/* Contact */
router.get('/contacto', function(req, res, next) {
  res.render('contact', { title: 'Contacto - HTL Suica Hotel & Resort'});
});

/* Results */
router.get('/reservas', function(req, res, next) {
  res.render('results', { title: 'Resultados - HTL Suica Hotel & Resort'});
});

/* Habitacion */
router.get('/habitacion', function(req, res, next) {
  res.render('room', { title: 'Habitacion - HTL Suica Hotel & Resort'});
});


module.exports = router;
