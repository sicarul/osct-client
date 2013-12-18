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
      var node = angular.element(elm.children()[0]);

      node.draggable({
            cursor: "move",
            grid: [ 15,15 ],
            cancel: 'td.node-border',
            containment: 'div#workspace',
            drag: function (event, ui) {
                scope.node.xpos = ui.position.left;
                scope.node.ypos = ui.position.top;
                scope.$apply();
            }
        });

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


        var originX = scope.node.xpos + 65;
        var originY = scope.node.ypos + 40;
        var offsetX = angular.element('div#workspace').position().left;
        var offsetY = angular.element('div#workspace').position().top;

        angular.forEach(scope.node.connections, function(conn, key){

            var x = conn.xpos + offsetX;
            var y = conn.ypos + offsetY;
            console.log(originY);
            console.log(offsetY);
            console.log(y);
            var length = Math.sqrt((x - originX) * (x - originX) 
            + (y - originY) * (y - originY));

            var angle = 180 / 3.1415 * Math.acos((y - originY) / length);
            if(x > originX)
                angle *= -1;

            angular.element('div#n-' + scope.node.id + "-c-" + conn.id)
            .css('height', length)
            .css('-webkit-transform', 'rotate(' + angle + 'deg)')
            .css('-moz-transform', 'rotate(' + angle + 'deg)')
            .css('-o-transform', 'rotate(' + angle + 'deg)')
            .css('-ms-transform', 'rotate(' + angle + 'deg)')
            .css('transform', 'rotate(' + angle + 'deg)');
          });

      };

      scope.$watch('node', function() {
        renderConnections(scope, elm);
        
      }, true);


    }
  };
});