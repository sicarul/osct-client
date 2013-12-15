/**
 * @name campaignFlow.controllers:flow
 */
angular.module('campaignFlow')
  .controller('flow',['$scope'
  , function ($scope) {
    $scope.message = 'Welcome to Flow';

    $scope.nodes = [
    {
    'id': 1,
    'icon': 'filter',
    'type': 'Seleccion',
    'selected': 400,
    'xpos': 50,
    'ypos': 50,
    'connections': [2, 3]
    },
    { 'id': 2,
    'icon': 'filter',
    'type': 'Prueba',
    'selected': 100,
    'xpos': 400,
    'ypos': 50
    },
    { 'id': 3,
    'icon': 'filter',
    'type': 'Prueba2',
    'selected': 80,
    'xpos': 400,
    'ypos': 150
    }
    ];

    $scope.connections = [
    {
      'from': 1,
      'to': 2
    }
    ];

  }]);
