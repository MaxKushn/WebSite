module.exports = function (module) {
  'use strict';
  /**
   * @ndoc directive
   * @name webApp.directive:passValidation
   * @require 'NgModel'
   * @restrict ''
   * @scope
   *
   * @param {String} passwordVerify This parameter compares passwords for verify
   *
   * @description
   * This check verify for passwords
   */
  module
  .directive("passwordVerify",['$parse', function($parse) {
     return {
        require: "ngModel",
        link: link
     };
     function link(scope, elem, attrs, ngModel) {
       var originalModel = $parse(attrs.passwordVerify),
           secondModel = $parse(attrs.ngModel);
       scope.$watch(attrs.ngModel, function (newValue) {
         ngModel.$setValidity(attrs.name, newValue === originalModel(scope));
       })
       scope.$watch(attrs.passwordVerify, function (newValue) {
         ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
       });
     }
  }]);
};
