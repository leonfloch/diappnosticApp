angular.module('app.services', [])

//servicio que se encarga de realizar el login
.service('LoginService', ['$http', function($http) {

    return {

        realizarLogin: function(cedulaV, passwordV) {
            return $http.post('http://ofp080195:8090/DiappnosticWS-rest/restServices/servicios/autenticar', 
                {usuario: cedulaV, contrasenia: passwordV})
            .success(function(response) {
                console.log(response);
                return response.data;
            })
            .error(function(response) {
                return "error";
                //console.log('Error: ', response);
            });                
        }
    };

}])




.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

