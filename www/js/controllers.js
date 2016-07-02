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
.controller('ingresoCtrl', function($scope, $state) {

    $scope.mail = "";
    $scope.password = "";

    /**
     * Metodo que se encarga de realizar el login
     */
    $scope.login = function (form) {
        console.log('metodo login..:' + form.$valid);

        if(form.$valid) {            
            $state.go('tabsController.registroEpisodio');
            
        }

        
    }

})
   
.controller('registroResultadoCtrl', function($scope) {

})
 