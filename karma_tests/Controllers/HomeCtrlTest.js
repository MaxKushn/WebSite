'use strict';

describe('controller: HomePageController', function() {
  var $controller,
      $scope,
      $interval,
      ngNotify,
      deferred,
  		$q,
      backend,
      $rootScope,
      $httpBackend,
      HomeCtrl,
      mockScope = {};

  beforeEach(angular.mock.module('webApp'));

  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _$interval_) {
    $interval = _$interval_;
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $q = _$q_;
		deferred = $q.defer();
    $scope = $rootScope.$new();
    HomeCtrl = $controller('HomePageController', {
      $scope: $scope,
      $interval: $interval,
    });
    expect(HomeCtrl).toBeDefined();
  }));

  it('show img on the gallery', function() {
    expect(HomeCtrl.images.length).toBe(4);
    HomeCtrl.isActive();
    HomeCtrl.showImg();
    $interval();
  })
});
