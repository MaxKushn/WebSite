module.exports = function (module) {
    'use strict';
    /**
  	 * @ndoc service
  	 * @name factory:SignInServices
  	 *
  	 * @description
     * service for sign-in page that send request when login is success.
  	 */
    module
    .factory('SignInServices', ['$http', '$q', function($http, $q){

        return {
            sendLogin: sendLogin
        }
        /**
         * @ndoc method
         * @name sendCode
         *
         * @methodOf module.factory: SignInServices
         *
         * @description
         * send request to sign-in
         */
        function sendLogin(loginData) {
          return $http ({
                method  : 'POST',
                url     : '/sign-in',
                data    : loginData,  // pass in data as strings
            })
        };

    }]);
};
