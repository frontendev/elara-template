var express = require('express');
var router = express.Router();
var siteRouter = require('../services/SiteRouter');
var siteService = require('../services/sites');




var indexAction = function (response,res){
    res.render('index', viewsVars);
};

var roomsAction = function (response,res){
  var nodoActual  = ss.getActualNode();
  viewsVars.rooms =  response.structure[nodoActual].contenidos[2][0];
  viewsVars.galeries =  response.structure[nodoActual].contenidos[0].galeria;
  res.render('rooms', viewsVars);
};

var hotelAction = function (response,res){
  res.render('index', { title: 'Habitaciones - HTL Suica Hotel & Resort', url : "/habitaciones"});
};

var roomAction = function (response,res){
  res.render('room', { title: 'Habitacion - HTL Suica Hotel & Resort', url : "/habitacion"});
};

var contactAction = function (response,res){
  res.render('contact', { title: 'Contacto - HTL Suica Hotel & Resort', url : "/contacto"});
};


router.get(/^.*$/, function(req,res,next) {
  //- Static URL
  var $staticUrl= 'http://localhost:3000/public/';
  //- Dinamic URL
  var $dinamicUrl= 'http://localhost:3000/';
  sr = new siteRouter(req);
  if( sr.isASitePath()){
    var path =  sr.getClearUrl();
    console.log('path: '+path);
    ss = new siteService('https://ra.mbooking.com.ar/','ALP0000001',1);
    ss.getPathRequest(path,function(response) {
          var action = ss.getAction()+'Action';
          var nodoRaiz  = ss.getRootNode();
          var nodoActual  = ss.getActualNode();
          var suffix = sr.getSuffix();
          try{
            console.log('action: '+action);
            viewsVars = { menu_items:response.menu};
            eval(action+'(response, res);');
          }catch(e){
            console.log('La action ('+ action + ') no existe e:',e);
          }
    });
  }
});

module.exports = router;
