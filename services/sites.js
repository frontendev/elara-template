var service =  function (serviceUrl ,bookId, siteId ){

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
        .on('complete', function(result) {callback(result.structure);})
        .on('error',responseHandler);

     };
    var $bookId =bookId;
    var $serviceUrl = serviceUrl;
    var $siteId = siteId;

};

module.exports = service ;
