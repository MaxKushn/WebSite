'use strict';

describe('controller: SignUpController', function() {
  var $controller,
      $scope,
      SignUpServices,
      ngNotify,
      deferred,
  		$q,
      backend,
      $rootScope,
      $httpBackend,
      SignUpCtrl,
      mockScope = {};

  beforeEach(angular.mock.module('webApp'));

  // beforeEach(angular.mock.inject(function($httpBackend) {
  //   backend = $httpBackend;
  //   // backend.expect('POST', '/contacts').respond(200, '');
  //   // var formData = {
  //   //   name: "max",
  //   //   email: "max_mi_98@mail.ru",
  //   //   subject: "Hello",
  //   //   message: "Hello world !"
  //   // }
  // }))
  // beforeEach(angular.mock.inject(function($controller, $rootScope) {
  //   mockScope = $rootScope.$new();
  //
  //   controller = $controller('ContactPageController', {
  //     $scope : mockScope
  //   });
  // }));

  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_,_SignUpServices_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $q = _$q_;
		deferred = $q.defer();
    $scope = $rootScope.$new();
    SignUpServices = _SignUpServices_;
    SignUpCtrl = $controller('SignUpController', {
      $scope: $scope,
      SignUpServices: SignUpServices,
    });
    expect(SignUpCtrl).toBeDefined();
  }));

  it('check registration form', function() {
    var signUpResponse = $q.defer();
    spyOn(SignUpServices, 'sendCode').and.returnValue(signUpResponse.promise);
    $scope.CheckTheRegForm();
    signUpResponse.resolve();
    $scope.$digest();
    expect(SignUpServices.sendCode).toHaveBeenCalled();
  })

  it('check notify', function() {
    $scope.displayNotifyReg()
  })


});
