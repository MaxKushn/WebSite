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
    .factory('SignInServices', SignInServices);
      SignInServices.$inject = ['$http', '$q']
      function SignInServices($http, $q) {
        var data;
        return {
            send: send
        }
        /**
         * @ndoc method
         * @name send
         *
         * @methodOf module.factory: SignInServices
         *
         * @description
         * send request to sign-in
         */
        function send(data) {
          return $http ({
                method  : 'POST',
                url     : '/sign-in',
                data    : data,  // pass in data as strings
            })
        };
    };
};
