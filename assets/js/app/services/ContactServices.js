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
    .factory('ContactServices', ['$http', '$q', function($http, $q){

        return {
            submitForm: submitForm
        }
        /**
         * @ndoc method
         * @name submitForm
         *
         * @methodOf module.factory: ContactServices
         *
         * @description
         * send request to contacts
         */
        function submitForm(formData) {
            return $http ({
                method  : 'POST',
                url     : '/contacts',
                data    : formData,  // pass in data as strings
            })
        };

    }]);
};
