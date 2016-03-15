var express = require('express');
var router = express.Router();
var soap = require('soap');

/* Home. */
router.get('/', function(req, res, next) {

    var url = 'https://bs1.booking.com.ar/bookingservice/wsdl/HTL0000001';
    var args =  {auth:{user: 'HTL0000001', password: '1fc6155a4182984348038f85058e17ca'}, request: {} };

    var url = 'http://10.10.10.61/motorweb/bookingservice/wsdl/LOCAL00001';

    var args =  {auth:{user: 'LOCAL00001', password: '1d9b9e8d477814a44c4bcd91ce90adbf'}, request: {} };
    soap.createClient(url, function(err, client) {
         var result = client.siteRequest(args,function(err, client){});
       console.log('respuesta:' + result);
       console.log('error' + err);
    });

  res.render('index', { title: 'HTL Suica Hotel & Resort - Home', url : "/" });
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
