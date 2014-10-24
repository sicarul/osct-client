'use strict';

/**
 * @ngdoc overview
 * @name osctClientApp
 * @description
 * # osctClientApp
 *
 * Main module of the application.
 */
angular
  .module('osctClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/campaign.html',
        controller: 'CampaignCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
