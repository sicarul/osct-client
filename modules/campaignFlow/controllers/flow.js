/**
 * @name campaignFlow.controllers:flow
 */
angular.module('campaignFlow')
  .controller('flow',['$scope'
  , function ($scope) {
    $scope.message = 'Welcome to Flow';

    $scope.nodes = [
    {'icon': 'filter',
     'type': 'Seleccion',
    'selected': 400},
    {'icon': 'filter',
     'type': 'Prueba',
    'selected': 100}
    ];

  }]);
