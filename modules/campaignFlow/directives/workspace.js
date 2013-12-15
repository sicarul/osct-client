/**
 * @ngdoc directive
 * @name campaignFlow.directives:workspace
 * @description
 * ...
 */

angular.module("campaignFlow").directive('workspace', function() {
  return {
    restrict: 'E',
    transclude:true,
    template: require('../views/workspace.js'),
    link: function(scope, elm, attrs) {
    }
  };
});