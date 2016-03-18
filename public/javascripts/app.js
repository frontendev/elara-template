var restApp = angular.module('restApp');

restApp.run(['$rootScope', '$injector', function($rootScope,$injector) {
    $injector.get("$http").defaults.transformRequest = function(data, headersGetter) {
      if (sessionService.isLogged()) {
        headersGetter()['Authorization'] = "Bearer " + sessionService.getAccessToken();
      }
      if (data) {
        return angular.toJson(data);
      }
    };
}]);
