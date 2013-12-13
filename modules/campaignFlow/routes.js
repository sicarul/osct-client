angular
.module('campaignFlow')
.config(['$routeProvider', '$locationProvider'
  , function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      controller: 'flow',
      template: require('./views/flow.js')
    })
}]);