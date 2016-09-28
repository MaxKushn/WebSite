module.exports = function(module) {
	'use strict';
	/**
	 * @ndoc controller
	 * @name webApp.controller:ContactPageController
	 *
	 * @description
	 * controller for Contact page.
	 */
	module
	.controller('ContactPageController', ContactPageController);
	ContactPageController.$inject =  ['$scope', 'ngNotify', 'ContactServices'];
  function ContactPageController($scope, ngNotify, ContactServices) {
				/**
				 * @ngdoc property
				 * @name vm
				 *
				 * @description
				 * vm is an instance of the current controller.
				 */
			  var vm = this;
				vm.displayNotify = displayNotify;
				vm.submitForm = submitForm;
				vm.formData = {};
			  /**
				 * @ndoc method
				 * @name displayNotify
				 *
				 * @methodOf webApp.controller: ContactPageController
				 *
				 * @description
				 * this method infrom user that his action were successfull
				 */
				 function displayNotify (notify) {
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
				/**
				 * @ndoc method
				 * @name submitForm
				 *
				 * @methodOf webApp.controller: ContactPageController
				 *
				 * @description
				 * this method check the response from the server
				 */
				function submitForm(data) {
					ContactServices.send(data)
						.then(function() {
							$scope.myForm.$setPristine();
			        $scope.myForm.$setUntouched();
							$scope.formData = {};
							vm.displayNotify('success');
						}, function(error) {
							vm.displayNotify('error');
						});
		};
	};
};
