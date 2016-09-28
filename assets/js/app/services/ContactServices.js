module.exports = function (module) {
    'use strict';
    /**
     * @ndoc service
     * @name factory:ContactServices
     *
     * @description
     * service for Contact page that send request when form is success.
     */
    module
    .factory('ContactServices', ContactServices);
      ContactServices.$inject = ['$http', '$q']
      function ContactServices($http, $q) {
        var data;
        return {
            send: send
        }
        /**
         * @ndoc method
         * @name send
         *
         * @methodOf module.factory: ContactServices
         *
         * @description
         * send request to contacts
         */
        function send(data) {
            return $http ({
                method  : 'POST',
                url     : '/contacts',
                data    : data,  // pass in data as strings
            })
        };
    };
};
