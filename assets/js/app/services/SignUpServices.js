module.exports = function (module) {
    'use strict';
    //
  	// @ndoc service
  	// @name factory:SignUpServices
  	//
  	// @description service for sign-up page that send request when form is success.
  	//
    // @example
    // module.exports = function(module) {
    // 	'use strict';
    // 	module
    // 	.controller('SignUpController', ['$scope', '$interval', 'SignUpServices', 'ngNotify',
    //     function($scope, $interval, SignUpServices, ngNotify) {
    // 			$scope.CheckTheRegForm = function() {
    // 				SignUpServices.sendCode($scope.joinData)
    // 				.then(function(response) {
    // 						$scope.displayNotifyReg('success');
    // 				},function(error) {
    // 						$scope.displayNotifyReg('error');
    // 				});
    // 			}
    // }])};
    module
    .factory('SignUpServices', ['$http', '$q', function($http, $q){

        return {
            sendCode: sendCode
        }

        function sendCode(joinData) {
          return $http ({
                method  : 'POST',
                url     : '/sign-up',
                data    : joinData,  // pass in data as strings
            })
        };

    }]);
};
