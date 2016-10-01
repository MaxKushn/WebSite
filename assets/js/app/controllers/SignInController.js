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
	.controller('SignInController', SignInController);
	 SignInController.$inject = ['$scope', '$interval', 'SignInServices', '$state']
   function SignInController($scope, $interval, SignInServices, $state) {
	  /**
 		 * @ngdoc property
 		 * @name vm
 		 *
 		 * @description
 		 * vm is an instance of the current controller.
		 	 */
 		var vm = this;

		vm.checkLogin = checkLogin;
		vm.loginData = {};
		/**
		 * @ndoc method
		 * @name checkLogin
		 *
		 * @methodOf webApp.controller: SignInController
		 *
		 * @description
		 * this method check the response from the server
		 */
		function checkLogin(data) {
			SignInServices.send(data)
			.then(function() {
				$state.go("home");
				$scope.loginData = {};
			},function(error) {
				''
			});
		}
	 }
};
