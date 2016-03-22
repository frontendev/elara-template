var express = require('express');
var router = express.Router();
var siteService = require('../services/sites');

/* Home. */
//router.all('/:pathUrl*', function(req, res, next) {
router.get('/', function(req, res, next) {
    var path = req.path;
    var nodoRaiz  = 14;
    var ss = new siteService('https://ra.mbooking.com.ar/','HTL0000001',3);
      console.log(req.params.pathUrl);
      ss.getPathRequest(path,function(result){
          res.render('index', { title: 'HTL Suica Hotel & Resort - Home', url : "/", menu_items: result[nodoRaiz].hijos });
          console.log(path);
      });
});

/* Service */
router.get('/servicios', function(req, res, next) {
  res.render('service', { title: 'Servicios - HTL Suica Hotel & Resort', url : "/servicios"});
});

/* Promociones */
router.get('/promociones', function(req, res, next) {
  res.render('promos', { title: 'Promociones - HTL Suica Hotel & Resort', url : "/promociones"});
});

/* Promo indivbidual */
router.get('/promocion', function(req, res, next) {
  res.render('promo', { title: 'Promocion - HTL Suica Hotel & Resort', url : "/promociones"});
});

/* Contact */
router.get('/contacto', function(req, res, next) {
  res.render('contact', { title: 'Contacto - HTL Suica Hotel & Resort', url : "/contacto"});
});
/* Contact */
router.get('/ubicacion', function(req, res, next) {
  res.render('location', { title: 'Ubicacion - HTL Suica Hotel & Resort', url : "/contacto"});
});

/* Results */
router.get('/reservas', function(req, res, next) {
  res.render('results', { title: 'Resultados - HTL Suica Hotel & Resort', url : "/reservas"});
});

/* Habitaciones */
router.get('/habitaciones', function(req, res, next) {
  res.render('rooms', { title: 'Habitaciones - HTL Suica Hotel & Resort', url : "/habitaciones"});
});
/* Habitaciones */
router.get('/habitaciones2', function(req, res, next) {
  res.render('rooms2', { title: 'Test masonry - HTL Suica Hotel & Resort', url : "/habitaciones"});
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
  res.render('checkout-step1', { title: 'Complete sus datos - HTL Suica Hotel & Resort', url : "/checkout-s1"});
});
/* checkout s2*/
router.get('/checkout-s2', function(req, res, next) {
  res.render('checkout-step2', { title: 'Elija un metodos de pago - HTL Suica Hotel & Resort', url : "/checkout-s2"});
});
/* checkout s2*/
router.get('/voucher', function(req, res, next) {
  res.render('voucher', { title: 'Voucher de compra - HTL Suica Hotel & Resort', url : "/voucher"});
});



module.exports = router;
