module.exports = function(module) {
	'use strict';
	module
	.controller('ContactPageController', ['$scope', '$interval', '$state',
    function($scope, $interval, $state) {
    	$scope.addNewUser = function (userDeteils) {
			$scope.information = userDeteils.name + " (" + userDeteils.email + ") (" + userDeteils.subject + ") (" + userDeteils.message + ")";
		}
		$scope.information = "Ready!";
  			
		// if($state.current.name == 'contacts') {
		// 	$('ul li a.home').removeClass("active");
		// 	$('ul li a.contacts').addClass("active");
		// }	
}])};
