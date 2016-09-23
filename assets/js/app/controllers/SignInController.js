module.exports = function(module) {
	'use strict';
	/**
	 * @ndoc controller
	 * @name webApp.controller:SignInController
	 *
	 * @description
	 * controller for sign-in page.
	 */
	module
	.controller('SignInController', ['$scope', '$interval', 'SignInServices',
    function($scope, $interval, SignInServices) {
			/**
			 * @ndoc method
			 * @name CheckTheLogin
			 *
			 * @methodOf webApp.controller: SignInController
			 *
			 * @description
			 * this method check the response from the server
			 */
			$scope.CheckTheLogin = function() {
				SignInServices.sendLogin($scope.loginData)
				.then(function(response) {
						''
				},function(error) {
						''
				});
			}

}])};
