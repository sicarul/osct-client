'use strict';

/**
 * @ngdoc directive
 * @name osctClientApp.directive:node
 * @description
 * # node
 */
angular.module('osctClientApp')
  .directive('node', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text(scope.n.name);
      }
    };
  });
