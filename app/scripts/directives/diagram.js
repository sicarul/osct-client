'use strict';

/**
 * @ngdoc directive
 * @name osctClientApp.directive:diagram
 * @description
 * # diagram
 */
angular.module('osctClientApp')
  .directive('diagram', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
           var data = scope.nodes;

           var chart = d3.select(element[0]);

            chart.append("div").attr("class", "chart")
             .selectAll('div')
             .data(data).enter().append("div")
             .transition().ease("elastic")
             .style("width", function(d) { return d.pos.x + "%"; })
             .text(function(d) { return d.name; });

         
      }
    };
  });
