/**
 * @name campaignFlow.controllers:flow
 */
angular.module('campaignFlow')
  .controller('flow',['$scope'
  , function ($scope, $interval) {
    $scope.message = 'Welcome to Flow';

    $scope.nodes = [
    {
    'id': 1,
    'icon': 'filter',
    'type': 'Seleccion',
    'selected': 400,
    'xpos': 300,
    'ypos': 150,
    'connections': [{'id':2, 'xpos':30, 'ypos':70}, {'id':3, 'xpos':30, 'ypos':70}]
    },
    { 'id': 2,
    'icon': 'filter',
    'type': 'Prueba',
    'selected': 100,
    'xpos': 360,
    'ypos': 0
    },
    { 'id': 3,
    'icon': 'filter',
    'type': 'Prueba2',
    'selected': 80,
    'xpos': 600,
    'ypos': 0
    }
    ];

  }]);
