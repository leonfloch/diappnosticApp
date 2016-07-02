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
.controller('ingresoCtrl', function($scope, $state, jwtHelper) {

    $scope.mail = "";
    $scope.password = "";

    




    /**
     * Metodo que se encarga de realizar el login
     */
    $scope.login = function (form) {
        console.log('metodo login..:' + form.$valid);

        if(form.$valid) {

            //ejemplo JWT
            var expToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImxlbyI6InBvbCJ9.QVsihmPar3vF0EQxeRBZSuyB_zNc1jwU1WHyo0un4KQ';  
            var tokenPayload = jwtHelper.decodeToken(expToken);
            console.log(tokenPayload);

            $state.go('tabsController.registroEpisodio');
            
        }

        
    }

})
   
.controller('registroResultadoCtrl', function($scope) {

})
 