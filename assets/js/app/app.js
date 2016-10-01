module.exports = (function() {
	'use strict';

	var config          = require('./config/router.js');
	var initServices    = require('./services/initServices.js');
	var initControllers = require('./controllers/initControllers.js');
	var initDirectives  = require('./directives/initDirectives.js');

	var webApp = angular.module('webApp', ['ui.router', 'ngNotify'])
		.run(['$rootScope',  '$state', function ($rootScope, $state) {
   		$rootScope.$state = $state;
    }]);

	config(webApp);
	initServices(webApp);
	initControllers(webApp);
	initDirectives(webApp);
}());
