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
  .factory('SignUpServices', SignUpServices);
    SignUpServices.$inject = ['$http', '$q']
    function SignUpServices($http, $q) {
      var data;
      return {
        send: send
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
      function send(data) {
        return $http ({
          method  : 'POST',
          url     : '/sign-up',
          data    : data,  // pass in data as strings
        })
      };
    };
};
