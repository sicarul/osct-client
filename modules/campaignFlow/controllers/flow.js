/**
 * @name campaignFlow.controllers:flow
 */
angular.module('campaignFlow')
  .controller('flow',['$scope'
  , function ($scope) {
    $scope.message = 'Welcome to Flow';

    $scope.getFlow = function(){return 4;};
  }]);