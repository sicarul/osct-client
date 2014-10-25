'use strict';

/**
 * @ngdoc service
 * @name osctClientApp.dimensions
 * @description
 * # dimensions
 * Constant in the osctClientApp.
 */
angular.module('osctClientApp')
  .constant('dimensions', {
    diagram:{
      width: 1024,
      height: 768
    },
    node:{
      width:150,
      height:60
    }
  });
