var service =  function (serviceUrl ,bookId, siteId, nodeRoot ){

/*
var $parIdDistribucion =[{ 1: "index"}, { 2: "hotel"}, { 3: "room"}, {4: "services"},
{5: "contact"}, {6:"location"}, {7: "promotion"}, {8: "encuesta"}, {9: "gallery"},
 {10:"legal"}, {11:"callus"}, { 12: "gallery360"},
  { 13: "homechain"},
   {14: "recreation"},
   {15:"contact2"}, { 16: "register"}];
   */

  var setDistribucion = function (distribucionId ){
    var $distribuciones =[{"distribucion_id": 1,"nombre": "Inicio","vista": "index"}, {"distribucion_id": 2,"nombre": "Hotel","vista": "hotel"}, {"distribucion_id": 3,"nombre": "Habitacion","vista": "room"}, {"distribucion_id": 4,"nombre": "Servicios","vista": "services"}, {"distribucion_id": 5,"nombre": "Contacto","vista": "contact"}, {"distribucion_id": 6,"nombre": "Ubicacion","vista": "location"}, {"distribucion_id": 7,"nombre": "Promocion","vista": "promotion"}, {"distribucion_id": 8,"nombre": "Encuesta","vista": "encuesta"}, {"distribucion_id": 9,"nombre": "Fotos","vista": "gallery"}, {"distribucion_id": 10,"nombre": "Legales","vista": "legal"}, {"distribucion_id": 11,"nombre": "Llamenos","vista": "callus"}, {"distribucion_id": 12,"nombre": "360","vista": "gallery360"}, {"distribucion_id": 13,"nombre": "HomeCadena","vista": "homechain"}, {"distribucion_id": 14,"nombre": "Recreacion","vista": "recreation"}, {"distribucion_id": 15,"nombre": "Contacto2","vista": "contact2"}, {"distribucion_id": 16,"nombre": "Registro","vista": "register"}];
    for( var i in $distribuciones){
      if($distribuciones[i].distribucion_id == distribucionId){
          $action = $distribuciones[i].vista;
          return ;
      }
    }


  }

    var setRootNode = function (rootNode ){
       $rootNode = rootNode;
    }
  this.getAction = function (){
    return $action;
  };
  this.getRootNode = function (){
    return $rootNode;
  };

    var responseHandler = function(error,result){
        if(result.error != undefined){
            console.log('Code:'+result.error.code);
            console.log('Message:'+result.error.exception[0].message);
            for(line in result.error.exception[0].trace){
                var errorLine = result.error.exception[0].trace[line];
                console.log('   ->'+errorLine.file +' ('+errorLine.line+')');
            }
            //throw new Exception('Error en la respuesta del servidor ');
        }
    };

     this.getPathRequest  =  function(path, callback){
        var rest = require('restler');
        var url = $serviceUrl+'api/sites/'+$siteId+'?bookId='+$bookId+'&path='+path;
        rest.get(url)
        .on('complete', function(result) {
          var keys = Object.keys( result.structure);
          setRootNode(keys[0]);
          setDistribucion(result.structure[keys[keys.length-1]].distribucion_id);
          callback(result.structure);
        })
        .on('error',responseHandler);

     };

    var $action = null;
    var $bookId =bookId;
    var $serviceUrl = serviceUrl;
    var $siteId = siteId;
    var $rootNode = nodeRoot;

};

module.exports = service ;
