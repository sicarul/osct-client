'use strict';

/**
 * @ngdoc directive
 * @name osctClientApp.directive:diagram
 * @description
 * # diagram
 */
angular.module('osctClientApp')
  .directive('diagram', function (dimensions) {

    var template =
    '<svg class="osctDiagram" width="' + dimensions.diagram.width + '" height="' + dimensions.diagram.height + '">\
      <g node ng-repeat="($index, node) in nodes">\
      </g>\
    </svg>'

    return {
      restrict: 'E',
      template: template
    };
  });
