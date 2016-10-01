'use strict';

describe('controller: SignInController', function() {
  var $controller,
      $scope,
      SignInServices,
      deferred,
  		$q,
      backend,
      $rootScope,
      $httpBackend,
      SignInCtrl,
      mockScope = {};

  beforeEach(angular.mock.module('webApp'));

  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_,_SignInServices_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $q = _$q_;
		deferred = $q.defer();
    $scope = $rootScope.$new();
    SignInServices = _SignInServices_;
    SignInCtrl = $controller('SignInController', {
      $scope: $scope,
      SignInServices: SignInServices,
    });
    expect(SignInCtrl).toBeDefined();
  }));

  it('check registration form', function() {
    var signInResponse = $q.defer();
    spyOn(SignInServices, 'send').and.returnValue(signInResponse.promise);
    SignInCtrl.checkLogin();
  })
});
