module.exports = function (module) {
  'use strict';
  /**
   * @ndoc directive
   * @name webApp.directive:websiteBehaviour
   * @restrict 'A'
   * @scope
   *
   * @description
   * description for websiteBehaviour directive
   */
  module
  .directive('websiteBehaviour',['$rootScope', '$state', '$timeout', function($rootScope, $state, $timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        /**
        * @ndoc jquery
        *
        * @description
        * changed page position to top when you moved to another page.
        */
      	$(document).ready(function() {
  		        $('body').scrollTop(0);
	      });
        /**
        * @ndoc jquery
        *
        * @description
        * when you click on navbar remove and add class "Active" to the navbar names and make their background orange
        */
	      $(document).on('click','#main-navbar',function(e) {
          if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
          $(this).collapse('hide');
          }
	      });
      }
    };
  }]);
};
