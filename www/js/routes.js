angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.registroEpisodio', {
    url: '/RegistroPage',
    views: {
      'tab1': {
        templateUrl: 'templates/registroEpisodio.html',
        controller: 'registroEpisodioCtrl'
      }
    }
  })

  .state('tabsController.perfil', {
    url: '/perfilPage',
    views: {
      'tab2': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('ingreso', {
    url: '/page8',
    templateUrl: 'templates/ingreso.html',
    controller: 'ingresoCtrl'
  })

  .state('tabsController.registroResultado', {
    url: '/registroResult',
    views: {
      'tab1': {
        templateUrl: 'templates/registroResultado.html',
        controller: 'registroResultadoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page8')

  

});