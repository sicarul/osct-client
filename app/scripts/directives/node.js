'use strict';

/**
 * @ngdoc directive
 * @name osctClientApp.directive:node
 * @description
 * # node
 */
angular.module('osctClientApp')
  .directive('node', function ($document, dimensions) {
    var rightRoundedRect = function rightRoundedRect(x, y, width, height, radius) {
      return "M" + x + "," + y
           + "h" + (width - radius)
           + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
           + "v" + (height - 2 * radius)
           + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
           + "h" + (radius - width)
           + "z";
    };

    var correctX = function correctX(x){
      if(x < 0)
        return 0;
      if(x + dimensions.node.width > dimensions.diagram.width)
        return dimensions.diagram.width - dimensions.node.width
      else
        return x;
    };

    var correctY = function correctX(y){
      if(y < 0)
        return 0;
      if(y + dimensions.node.height > dimensions.diagram.height)
        return dimensions.diagram.height - dimensions.node.height
      else
        return y;
    };

    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

          var group = d3.select(element[0])
                        .attr("transform", "translate(" + scope.node.pos.x + "," + scope.node.pos.y + ")");

          var rect = group
            .append("path")
              .attr("class", "node")
              .attr("d", rightRoundedRect(0, 0, dimensions.node.width, dimensions.node.height, 15));

          var text = group
            .append('text')
            .attr("x", 5)
            .attr("y", 15)
            .attr("class", "nodeName")
            .text(scope.node.name);


          // Draggable
          var startDragX = 0, startDragY = 0;
          element.on('mousedown', function(event) {
            event.preventDefault();
            startDragX = event.screenX - scope.node.pos.x;
            startDragY = event.screenY - scope.node.pos.y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
          });

          function mousemove(event) {
            var newX = correctX(event.screenX - startDragX);
            var newY = correctY(event.screenY - startDragY);
            scope.$apply(function(){
              scope.node.pos.x = newX;
              scope.node.pos.y = newY;
            })
            group.attr("transform", "translate(" + scope.node.pos.x + "," + scope.node.pos.y + ")");
          }

          function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
          }
      }
    };
  });
