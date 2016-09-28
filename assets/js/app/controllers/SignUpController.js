module.exports = function(module) {
	'use strict';
	/**
	 * @ndoc controller
	 * @name webApp.controller:SignUpController
	 *
	 * @description
	 * controller for sing-up page.
	 */
	module
	.controller('SignUpController', SignUpController);
		SignUpController.$inject = ['$scope', '$interval', 'SignUpServices', 'ngNotify']
    function SignUpController($scope, $interval, SignUpServices, ngNotify) {
			/**
			 * @ngdoc property
			 * @name vm
			 *
			 * @description
			 * vm is an instance of the current controller.
			 */
			var vm = this;
			vm.displayNotifyReg = displayNotifyReg;
			vm.sendRegForm = sendRegForm;
			vm.joinData = {};
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
			 * @name sendRegForm
			 *
			 * @methodOf webApp.controller: SignUpController
			 *
			 * @description
			 * this method check the response from the server
			 */
			 function sendRegForm(data) {
				SignUpServices.send(data)
				.then(function() {
					$scope.Form.join.$setPristine();
					$scope.Form.join.$setUntouched();
					$scope.joinData = {};
					vm.displayNotifyReg('success');
				}, function(error) {
					vm.displayNotifyReg('error');
				});
			}
		}
};
