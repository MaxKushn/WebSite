module.exports = function (module) {
    'use strict';
    //
    // @ndoc directive
    // @name webApp.directive:websiteBehaviour
    // @restrict A
    // @scope
    //
    // @description
    // this directive changed page position to top when you move to another page.
    // this directive remove and add class "Active" to the navbar names and make their background orange
    //
    module
    .directive('websiteBehaviour',['$rootScope', '$state', '$timeout', function($rootScope, $state, $timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, controller) {

            	$(document).ready(function() {
		    		        $('body').scrollTop(0);
				      });

				      $(document).on('click','#main-navbar',function(e) {
				            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				            $(this).collapse('hide');
				            }
				      });
            }
        };
    }]);
};
