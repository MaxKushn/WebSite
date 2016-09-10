module.exports = function(module) {
	'use strict';
	//
	// @ndoc controller
	// @name webApp.controller:SignUpController
	//
	// @description controller for sing-up page.
	//
	module
	.controller('SignUpController', ['$scope', '$interval', 'SignUpServices', 'ngNotify',
    function($scope, $interval, SignUpServices, ngNotify) {
			//
			// @ndoc method
			// @name displayNotifyReg
			//
			// @methodOf webApp.controller: SignUpController
			//
			// @description this method infrom user that his action were successfull
			//
			$scope.displayNotifyReg = function(notify) {
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
			//
			// @ndoc method
			// @name CheckTheRegForm
			//
			// @methodOf webApp.controller: SignUpController
			//
			// @description this method check the response from the server
			//
			$scope.CheckTheRegForm = function() {
				SignUpServices.sendCode($scope.joinData)
				.then(function(response) {
						$scope.displayNotifyReg('success');
				},function(error) {
						$scope.displayNotifyReg('error');
				});
			}
}])};
