module.exports = function(module) {
	'use strict';
	/**
	 * @ndoc controller
	 * @name webApp.controller:HomePageController
	 *
	 * @description
	 * controller for main page.
	 */
	module
	.controller('HomePageController', HomePageController);
	 HomePageController.$inject = ['$scope', '$interval'];
    function HomePageController($scope, $interval) {
		/**
		 * @ngdoc property
		 * @name vm
		 *
		 * @description
		 * vm is an instance of the current controller.
		 */
		var vm = this;

		vm.showImg = showImg;
		vm.isActive = isActive;
	  /**
		 * @ndoc array
		 * @name images
		 *
		 * @arrayOf webApp.controller: ContactPageController
		 *
		 * @description
		 * contain images for gallery on the main page.
		 */
		vm.images = [
			{src:'http://livedemo00.template-help.com/drupal_52188/sites/default/files/styles/flexslider_full/public/slide-1.jpg?itok=n8rpU1Sd', desc:"We added technology to strategy. You get the multiplier effect", title:"Business works with technology"},
			{src:'http://livedemo00.template-help.com/drupal_52188/sites/default/files/styles/flexslider_full/public/slide-2.jpg?itok=-qk5utWc', desc:"We are the trusted advisor to the world's leading businesses", title:"Professional Consulting Services"},
			{src:'http://livedemo00.template-help.com/drupal_52188/sites/default/files/styles/flexslider_full/public/slide-3.jpg?itok=N0lvhY6E', desc:"We work with our clients as we do with our colleagues", title:"Broaden your market edge"},
			{src:'http://livedemo00.template-help.com/drupal_52188/sites/default/files/styles/flexslider_full/public/slide-4.jpg?itok=wzGN91aT', desc:"We develop unparalleled management insights", title:"We are a network of leaders"}
		];
		/**
		 * @ndoc variable
		 * @name _Index
		 *
		 * @description
		 * contain first image that will show on the gallery
		 */
		vm._Index = 0;
		/**
		 * @ndoc variable
		 * @name myPattern
		 *
		 * @description
		 * contain parallax image
		 */
		vm.myPattern = "http://static.livedemo00.template-help.com/drupal_52188/sites/default/files/parallax-1.jpg";
		/**
		 * @ndoc method
		 * @name showImg
		 *
		 * @methodOf webApp.controller: HomePageController
		 *
		 * @description
		 * show certain image
		 */
		function showImg(index) {
			vm._Index = index;
		};
		/**
		 * @ndoc method
		 * @name $interval
		 *
		 * @methodOf webApp.controller: HomePageController
		 *
		 * @description
		 * switch images every 5 sec.
		 */
		$interval(function () {
			vm.showImg(vm._Index);
			vm._Index = vm._Index + 1
			if(vm._Index >= vm.images.length) {
				vm._Index = 0}
			}, 5000)
		/**
		 * @ndoc method
		 * @name isActive
		 *
		 * @methodOf webApp.controller: HomePageController
		 *
	   * @description
		 * pick active image
		 */
		function isActive(index) {
			return vm._Index === index;
		};
	}
};
