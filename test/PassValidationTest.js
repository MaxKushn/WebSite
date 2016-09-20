describe('directive: passValidation', function() {
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
        '<input type="password" ng-model="joinData.password" name="password" required>' +
        '<input type="password" password-verify="joinData.password" ng-model="joinData.confirmPassword" name="confirmPassword" required>' +
      '</form>'
    );
    $scope.model = {password: null, confirmPassword: null}
    $compile(element)($scope);
    form = $scope.form;
  }));
  describe('Full scan PassValidation directive', function() {
    it('should indicate invalid when the passwords do not match.', function() {

          form.password.$setViewValue(123);
          form.confirmPassword.$setViewValue(1234);
          $scope.$digest();
          expect(form.password.$valid && form.confirmPassword.$valid).toBe(false);
      });

      it('should indicate valid when the passwords match.', function() {

          form.password.$setViewValue(123);
          form.confirmPassword.$setViewValue(123);
          $scope.$digest();
          expect(form.password.$valid && form.confirmPassword.$valid).toBe(true);
      });
  });
})
