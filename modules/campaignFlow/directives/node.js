/**
 * @ngdoc directive
 * @name campaignFlow.directives:node
 * @description
 * ...
 */

angular.module("campaignFlow").directive('node', function() {
  return {
    restrict: 'A',
    template: require('../views/node.js'),  
    link: function(scope, elm, attrs) {
      // Make it draggable, baby!
      var node = angular.element(elm.children()[0]);

      node.draggable({
            cursor: "move",
            grid: [ 15,15 ],
            cancel: '.connCreate',
            containment: 'div#workspace',
            drag: function (event, ui) {
                scope.node.xpos = ui.position.left;
                scope.node.ypos = ui.position.top;
                scope.$apply();
            }
        });

      // Make it possible to create new connections by dragging the handler
      var nodeCreate=node.find('.connCreate');

      nodeCreate.draggable({
        cursor: "crosshair",
        containment: 'div#workspace',
        opacity: 0.7,
        drag: function (event, ui) {
          angular.forEach(scope.nodes, function(node, key){
            console.log(node);
          });
        },
        helper: "clone"
      });

      function GetBoundingRect(r1, r2)
      {
          var left = Math.min(r1.x, r2.x);
          var right = Math.max(r1.x+r1.width, r2.x+r2.width);
          var top = Math.min(r1.y, r2.y);
          var bottom = Math.max(r1.y+r1.height, r2.y+r2.height);
          return {'width': right-left, 'height':bottom-top};
      }

      function CheckIfIntersect(e1, e2)
      {
        var r1 = {'x': e1.offsetLeft, 'y': e1.offsetTop, 'width': e1.offsetWidth , 'height': e1.offsetHeight};
        var r2 = {'x': e2.offsetLeft, 'y': e2.offsetTop, 'width': e2.offsetWidth , 'height': e2.offsetHeight};
        var bound = GetBoundingRect(r1,r2);
        return (bound.width < r1.width + r2.width) &&
               (bound.height < r1.height + r2.height);
      }

      // Connection drawing
      function renderConnections(scope, elm) {
        var xdict = {};
        var ydict = {};
        angular.forEach(scope.nodes, function(node, key){
          xdict[node.id] = node.xpos;
          ydict[node.id] = node.ypos;
        });

        angular.forEach(scope.nodes, function(node, key){
          angular.forEach(node.connections, function(conn, key){
            conn.xpos = xdict[conn.id];
            conn.ypos = ydict[conn.id];
          });
        });

        var HalfWidth=65;
        var HalfHeight=40;
        var centerX = HalfWidth;
        var centerY = HalfHeight;
        var offsetX = angular.element('div#workspace').position().left;
        var offsetY = angular.element('div#workspace').position().top;

        angular.forEach(scope.node.connections, function(conn, key){
            var offsetOriginX;
            var offsetOriginY;
            var originX;
            var originY;
            var centerDestX = conn.xpos - scope.node.xpos + HalfWidth;
            var centerDestY = conn.ypos - scope.node.ypos + HalfHeight;
            var x;
            var y;

            if (centerX-HalfWidth > centerDestX+HalfWidth){ //It's on the right
              offsetOriginX=-HalfWidth;
              offsetOriginY=0;
            } else if (centerX+HalfWidth < centerDestX-HalfWidth){ // Left
              offsetOriginX=HalfWidth;
              offsetOriginY=0;
            } else if(centerY-HalfHeight > centerDestY+HalfHeight){ // Above
              offsetOriginX=0;
              offsetOriginY=-HalfHeight;
            }else { // Below
              offsetOriginX=0;
              offsetOriginY=HalfHeight;
            }

            originX=centerX+offsetOriginX;
            originY=centerY+offsetOriginY;
            x=centerDestX-offsetOriginX;
            y=centerDestY-offsetOriginY;


            var length = Math.sqrt((x - originX) * (x - originX) 
            + (y - originY) * (y - originY));

            var angle = 180 / 3.1415 * Math.acos((y - originY) / length);
            if(x > originX)
                angle *= -1;

            angular.element('div#n-' + scope.node.id + "-c-" + conn.id)
            .css('left', originX + "px")
            .css('top', originY + "px")
            .css('height', length)
            .css('-webkit-transform', 'rotate(' + angle + 'deg)')
            .css('-moz-transform', 'rotate(' + angle + 'deg)')
            .css('-o-transform', 'rotate(' + angle + 'deg)')
            .css('-ms-transform', 'rotate(' + angle + 'deg)')
            .css('transform', 'rotate(' + angle + 'deg)')
            ;
          });

      };

      scope.$watch('node', function() {
        renderConnections(scope, elm);
        
      }, true);


    }
  };
});