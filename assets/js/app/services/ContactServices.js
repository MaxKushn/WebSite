module.exports = function (module) {
    'use strict';
    //
    // @ndoc service
    // @name factory:ContactServices
    //
    // @description service for Contact page that send request when form is success.
    //
    // @example
    //   module.exports = function(module) {
    //   	'use strict';
    //   	module
    //   	.controller('ContactPageController', ['$scope', '$state', 'ngNotify', 'ContactServices',
    //       function($scope, $state, ngNotify, ContactServices) {
    //         $scope.CheckTheForm = function() {
    // 					ContactServices.submitForm($scope.formData)
    // 					.then(function(response) {
    // 							$scope.displayNotify('success');
    // 					},function(error) {
    // 							$scope.displayNotify('error');
    // 					});
    // 				}
    // }])};
    module
    .factory('ContactServices', ['$http', '$q', function($http, $q){

        return {
            submitForm: submitForm
        }

        function submitForm(formData) {
            return $http ({
                method  : 'POST',
                url     : '/contacts',
                data    : formData,  // pass in data as strings
            })
        };

    }]);
};
