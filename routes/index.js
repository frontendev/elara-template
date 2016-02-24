var express = require('express');
var router = express.Router();

/* Home. */
router.get('/', function(req, res, next) {
  res.locals.urls = '/';
  res.render('index', { title: 'HTL Suica Hotel & Resort - Home', url : "/" });
});

/* Service */
router.get('/servicios', function(req, res, next) {
  res.locals.urls = '/servicios';
  res.render('service', { title: 'Servicios - HTL Suica Hotel & Resort', url : "/servicios"});
});

/* Promos */
router.get('/promociones', function(req, res, next) {
  res.render('promos', { title: 'Promociones - HTL Suica Hotel & Resort', url : "/promociones"});
});

/* Contact */
router.get('/contacto', function(req, res, next) {
  res.render('contact', { title: 'Contacto - HTL Suica Hotel & Resort', url : "/contacto"});
});

/* Results */
router.get('/reservas', function(req, res, next) {
  res.render('results', { title: 'Resultados - HTL Suica Hotel & Resort', url : "/reservar"});
});

/* Habitacion */
router.get('/habitacion', function(req, res, next) {
  res.render('room', { title: 'Habitacion - HTL Suica Hotel & Resort', url : "/habitacion"});
});

/* Imagenes */
router.get('/imagenes', function(req, res, next) {
  res.render('images', { title: 'Imágenes - HTL Suica Hotel & Resort', url : "/imagenes"});
});
/* checkout s1*/
router.get('/checkout-s1', function(req, res, next) {
  res.render('checkout-step1', { title: 'Complete sus datos - HTL Suica Hotel & Resort', url : "/imagenes"});
});
/* checkout s2*/
router.get('/checkout-s2', function(req, res, next) {
  res.render('checkout-step2', { title: 'Elija un metodos de pago - HTL Suica Hotel & Resort', url : "/imagenes"});
});


module.exports = router;
