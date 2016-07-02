angular.module('app.controllers', [])
  
.controller('registroEpisodioCtrl', function($scope) {

})
   
.controller('perfilCtrl', function($scope) {

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
 