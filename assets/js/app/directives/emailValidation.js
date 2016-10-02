module.exports = function (module) {
  'use strict';
  /**
   * @ndoc directive
   * @name webApp.directive:emailValidation
   * @require 'NgModel'
   * @restrict ''
   * @scope
   *
   * @description
   * This check validation for emails
   */
  module
  .directive('validateEmail', function() {
    var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    return {
      require: 'ngModel',
      restrict: 'A',
      link: function(scope, elm, attrs, ctrl) {
        // only apply the validator if ngModel is present and Angular has added the email validator
        if (ctrl && ctrl.$validators.email) {

          // this will overwrite the default Angular email validator
          ctrl.$validators.email = function(modelValue) {
            return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
          };
        }
      }
    };
  })
};
