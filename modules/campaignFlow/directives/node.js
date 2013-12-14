/**
 * @ngdoc directive
 * @name campaignFlow.directives:node
 * @description
 * ...
 */

angular.module("campaignFlow").directive('node', function() {
  return {
    restrict: 'E',
    template: require('../views/node.js'),
    link: function(scope, elm, attrs) { 
    }
  };
});