var SiteRouter = function (req) {

	var parseLang = function(cleanUrl){
		var p = cleanUrl.split('/');
		for( var i in $langCodes){
			var langCode = $langCodes[i];
			if(p.indexOf(langCode) != 0 ){
				$langCode = langCode;
			}
		}
	};

	var testPath = function() {

	};

	var parseGet = function() {
		var u = $originalUrl;
		if(u.lastIndexOf('?') != -1) {
			var p = u.split('?');
			if(p.length){
				if(p[1].indexOf('&') != -1) {
					var pv	= p[1].split('&');
					for( var i in pv ){
						var v = p[1][i].split('=');
						$requestParams[v[0]] = v[1];
					}
				}else{
					var v = p[1].split('=');
					$requestParams[v[0]] = v[1];
				}
			}
			$cleanUrl = p[0];
		}else{
			$cleanUrl = $originalUrl;
		}

	};

	this.getOriginalUrl = function (){
		return $originalUrl;
	};
	this.getClearUrl = function (){
		return $cleanUrl;
	};
	this.getLang = function (){
		return $langCode;
	};
	this.getParams = function (){
		return $requestParams;
	};
	this.isASitePath=function (){
		return $valid;
	}

	var $langCodes = ['es','en','pt'];
	var $langCode = 'es';
	var $originalUrl = req.url;
	var $cleanUrl = req.url;
	var $url = req.url;
	var $requestParams = {};
	var $valid = true;

	//clean the get params  and set clean url
	parseGet();
	//
	testPath();
	//
	parseLang($cleanUrl);

};
module.exports = SiteRouter;
