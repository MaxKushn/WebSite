describe('directive: nameValidation', function() {
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
        '<input full-name name="fullname" type="text" class="form-control" ng-model="formData.name" required></input>' +
      '</form>'
    );
    $scope.model = {name: null}
    $compile(element)($scope);
    form = $scope.form;
  }));
  describe('Full scan nameValidation directive', function() {

      it('should not pass when the name is invalid.', function() {

          form.fullname.$setViewValue('Vasia');
          $scope.$digest();
          expect(form.fullname.$valid).toBe(false);
      });

      it('should pass when the name is valid.', function() {

          form.fullname.$setViewValue('Vasia Pupkin');
          $scope.$digest();
          expect(form.fullname.$valid).toBe(true);
      });
  });
})
