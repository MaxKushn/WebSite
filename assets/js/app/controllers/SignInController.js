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
	 SignInController.$inject = ['$scope', '$interval', 'SignInServices', '$state', 'ngNotify']
   function SignInController($scope, $interval, SignInServices, $state, ngNotify) {
	  /**
 		 * @ngdoc property
 		 * @name vm
 		 *
 		 * @description
 		 * vm is an instance of the current controller.
		 	 */
 		var vm = this;
		vm.displayNotifyReg = displayNotifyReg;
		vm.checkLogin = checkLogin;
		vm.loginData = {};
		/**
		 * @ndoc method
		 * @name displayNotifyReg
		 *
		 * @methodOf webApp.controller: SignUpController
		 *
		 * @description
		 * this method infrom user that his action were successfull
		 */
		 function displayNotifyReg(notify) {
				switch(notify) {
					case 'success':
						ngNotify.set('You have successfully registered!', {
							type: 'success'
						});
					break;
					case 'error':
						ngNotify.set('You have not send the form, try again later.', 'error');
					break;
					default:
						ngNotify.set('This is the current default message type.');
					break;
				}
			};
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
				vm.displayNotifyReg('error');
			});
		}
	 }
};
