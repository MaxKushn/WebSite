module.exports = function (module) {
    'use strict';
    /**
  	 * @ndoc service
  	 * @name factory:SignUpServices
  	 *
  	 * @description
     * service for sign-up page that send request when form is success.
  	 */
    module
    .factory('SignUpServices', ['$http', '$q', function($http, $q){

        return {
            sendCode: sendCode
        }
        /**
         * @ndoc method
         * @name sendCode
         *
         * @methodOf module.factory: SignUpServices
         *
         * @description
         * send request to sign-up
         */
        function sendCode(joinData) {
          return $http ({
                method  : 'POST',
                url     : '/sign-up',
                data    : joinData,  // pass in data as strings
            })
        };

    }]);
};
