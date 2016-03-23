var express = require('express');
var router = express.Router();
var siteRouter = require('../services/SiteRouter');
var siteService = require('../services/sites');

/* GET home page. */


var indexAction = function (structure,res){
  var nodoRaiz  = ss.getRootNode();

    res.render('index', { title: 'HTL Suica Hotel & Resort - Home', url : "/", menu_items: structure[nodoRaiz].hijos });
};

var roomAction = function (structure,res){
  //solicitar habitaciones
  var rooms = null;
    res.render('rooms', { title: 'Habitaciones - HTL Suica Hotel & Resort', url : "/habitaciones"});
};

var hotelAction = function (structure,res){
    res.render('index', { title: 'Habitaciones - HTL Suica Hotel & Resort', url : "/habitaciones"});
};

var roomAction = function (structure,res){
    res.render('room', { title: 'Habitacion - HTL Suica Hotel & Resort', url : "/habitacion"});
};

var contactAction = function (structure,res){
    res.render('contact', { title: 'Contacto - HTL Suica Hotel & Resort', url : "/contacto"});
};


router.get(/^.*$/, function(req,res,next) {
  //- Static URL
  var $staticUrl= 'http://localhost:3000/public/';
  //- Dinamic URL
  var $dinamicUrl= 'http://localhost:3000/';
  var sr = new siteRouter(req);
  if( sr.isASitePath()){
    var path =  sr.getClearUrl();
    console.log('path: '+path);
    ss = new siteService('https://ra.mbooking.com.ar/','HTL0000001',3);
    ss.getPathRequest(path,function(structure) {
        var action = ss.getAction()+'Action';
        try{
         console.log('action: '+action);
          eval(action+'(structure, res);');
        }catch(e){
          console.log('La action ('+ action + ') no existe e:',e);
        }
    });
  }
});

module.exports = router;
