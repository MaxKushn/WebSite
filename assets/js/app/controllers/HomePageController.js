module.exports = function(module) {
	'use strict';
	module
	.controller('HomePageController', ['$scope', '$interval',
    function($scope, $interval) {
		$scope.images = [{src:'http://livedemo00.template-help.com/drupal_52188/sites/default/files/styles/flexslider_full/public/slide-1.jpg?itok=n8rpU1Sd', desc:"We added technology to strategy. You get the multiplier effect", title:"Business works with technology"},
		{src:'http://livedemo00.template-help.com/drupal_52188/sites/default/files/styles/flexslider_full/public/slide-2.jpg?itok=-qk5utWc', desc:"We are the trusted advisor to the world's leading businesses", title:"Professional Consulting Services"},
		{src:'http://livedemo00.template-help.com/drupal_52188/sites/default/files/styles/flexslider_full/public/slide-3.jpg?itok=N0lvhY6E', desc:"We work with our clients as we do with our colleagues", title:"Broaden your market edge"},
		{src:'http://livedemo00.template-help.com/drupal_52188/sites/default/files/styles/flexslider_full/public/slide-4.jpg?itok=wzGN91aT', desc:"We develop unparalleled management insights", title:"We are a network of leaders"}];
		$scope._Index = 0;
		$scope.myPattern = "http://static.livedemo00.template-help.com/drupal_52188/sites/default/files/parallax-1.jpg";
		//show certain image
		$scope.showImg = function(index) {
			$scope._Index = index;
		};

		$interval(function () {
			$scope.showImg($scope._Index);
			$scope._Index = $scope._Index + 1
			if($scope._Index >= $scope.images.length) {
				$scope._Index = 0}
			}, 5000)

		$scope.isActive = function (index) {
			return $scope._Index === index;
		};
}])};
