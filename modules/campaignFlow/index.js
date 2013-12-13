// auto-exports //

var app = angular.module('campaignFlow', ['ngRoute']);

require('./routes.js');
require('./directives/node.js');
require('./directives/workspace.js');
require('./controllers/flow.js');