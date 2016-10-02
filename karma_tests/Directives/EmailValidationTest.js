describe('directive: emailValidation', function() {
  var $scope,
      $compile,
      $rootScope,
      $httpBackend,
      element,
      form;

  beforeEach(angular.mock.module('webApp'));

  beforeEach(inject(function(_$rootScope_, _$compile_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(/templates.*/).respond(200, '');
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    element = angular.element(
      '<form name="form">' +
        '<input validate-email name="email" class="form-control" type="email" ng-model="formData.email" required>' +
      '</form>'
    );
    $scope.model = {email: null}
    $compile(element)($scope);
    form = $scope.form;
  }));
  describe('Full scan emailValidation directive', function() {
      it('should not pass when the email is invalid.', function() {
          form.email.$setViewValue('t@t.c');
          $scope.$digest();
          expect(form.email.$valid).toBe(false);
      });

      it('should pass when the email is valid.', function() {
          form.email.$setViewValue('t@t.co');
          $scope.$digest();
          expect(form.email.$valid).toBe(true);
      });
  });
})
