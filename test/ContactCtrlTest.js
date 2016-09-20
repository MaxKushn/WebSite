'use strict';

describe('controller: ContactPageController', function() {
  var $controller,
      $scope,
      ContactServices,
      ngNotify,
      deferred,
  		$q,
      backend,
      $rootScope,
      $httpBackend,
      ContactCtrl,
      mockScope = {};

  beforeEach(angular.mock.module('webApp'));

  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_,_ContactServices_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $q = _$q_;
		deferred = $q.defer();
    $scope = $rootScope.$new();
    ContactServices = _ContactServices_;
    ContactCtrl = $controller('ContactPageController', {
      $scope: $scope,
      ContactServices: ContactServices,
    });
    expect(ContactCtrl).toBeDefined();
  }));

  it('check contact form', function() {
    var contactResponse = $q.defer();
    spyOn(ContactServices, 'submitForm').and.returnValue(contactResponse.promise);
    $scope.CheckTheForm();
    contactResponse.resolve();
    $scope.$digest();
    expect(ContactServices.submitForm).toHaveBeenCalled();
  })

  it('check notify', function() {
    $scope.displayNotify()
  })


});
