'use strict';

/**
 * @ngdoc function
 * @name osctClientApp.controller:CampaignCtrl
 * @description
 * # CampaignCtrl
 * Controller of the osctClientApp
 */
angular.module('osctClientApp')
  .controller('CampaignCtrl', function ($scope) {

    $scope.nodes = [
    {
      'id': 1,
      'type': 'filter',
      'name': 'Prueba',
      'selected': 400,
      'pos': {'x': 10, 'y': 10}
    },
    {
      'id': 1,
      'type': 'filter',
      'name': 'Prueba 2',
      'selected': 400,
      'pos': {'x': 10, 'y': 180}
    }
    ]; 

    $scope.connections = [];
  });
