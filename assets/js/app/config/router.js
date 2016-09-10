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
			.state('blog', {
				url: '/blog',
				templateUrl: '/assets/templates/blog.html',
			})
			.state('blog-2', {
				url: '/blog-2',
				templateUrl: '/assets/templates/blog-2.html',
			})
			.state('sign-in', {
				url: '/sign-in',
				templateUrl: '/assets/templates/sign-in.html',
				controller: 'SignInController',
			})
			.state('sign-up', {
				url: '/sign-up',
				templateUrl: '/assets/templates/sign-up.html',
				controller: 'SignUpController',
			})
		}])
};
