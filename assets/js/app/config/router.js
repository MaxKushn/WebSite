module.exports = function(module) {
	'use strict';
	module
	.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			//        DEFAULT VIEW
			$urlRouterProvider.otherwise('/home');

			$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/assets/templates/home.html',
				controller: 'HomePageController',
			})
			.state('contacts', {
				url: '/contacts',
				templateUrl: '/assets/templates/contacts.html',
				controller: 'ContactPageController',
			})
		}])
};