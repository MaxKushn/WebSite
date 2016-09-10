module.exports = function(module) {
	'use strict';
	//
	// @ndoc controller
	// @name webApp.controller:ContactPageController
	//
	// @description controller for Contact page.
	//
	module
	.controller('ContactPageController', ['$scope', '$state', 'ngNotify', 'ContactServices',
    function($scope, $state, ngNotify, ContactServices) {
			  //
				// @ndoc method
				// @name displayNotify
				//
				// @methodOf webApp.controller: ContactPageController
				//
				// @description this method infrom user that his action were successfull
				//
				$scope.displayNotify = function(notify) {
                switch(notify) {
                	case 'success':
                        ngNotify.set('You have successfully send the form!', {
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
				// @name CheckTheForm
				//
				// @methodOf webApp.controller: ContactPageController
				//
				// @description this method check the response from the server
				//
				$scope.CheckTheForm = function() {
					ContactServices.submitForm($scope.formData)
					.then(function(response) {
							$scope.displayNotify('success');
					},function(error) {
							$scope.displayNotify('error');
					});
				}


}])};
