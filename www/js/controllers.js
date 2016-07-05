angular.module('app.controllers', [])
  
.controller('registroEpisodioCtrl', function($scope) {

})

 //controlador encargado del tab de perfil  
.controller('perfilCtrl', function($scope, $state) {

    /**
     * Cierra la sesion activa del usuario
     */
    $scope.cerrarSesion = function() {
        $state.go('ingreso');


    }

})

//Controlador encargado de la pantalla de login      
.controller('ingresoCtrl', function($scope, $state, jwtHelper, LoginService) {

    $scope.cedula = "";
    $scope.password = "";


    /**
     * Metodo que se encarga de realizar el login
     */
    $scope.login = function (form) {
        console.log('metodo login..:' + form.$valid);        

        if(form.$valid) {

            LoginService.realizarLogin($scope.cedula, $scope.password)
            .then(function(response) {
                $scope.post = response;
                console.log('RESPONSE: ', $scope.post);
            });

            //ejemplo JWT
            var expToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiMTA1MjM5Mjc1NSIsIm5vbWJyZSI6Ikp1YW4gQ2FybG9zIEFsYmFycmFjw61uIiwicm9sIjoyLCJwZXJtaXNvcyI6W3siY29kaWdvIjoiMSJ9LHsiY29kaWdvIjoiMiJ9XX0.nNKDDu-lom04IazQsaTETXwMnsMimBfXIkbbJAAQUrQ';  
            var tokenPayload = jwtHelper.decodeToken(expToken);
            console.log(tokenPayload);

            $state.go('tabsController.registroEpisodio');
            
        }

        
    }

})
   
.controller('registroResultadoCtrl', function($scope) {

})
 