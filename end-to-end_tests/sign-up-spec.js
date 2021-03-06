describe('Registration form test', function() {
  it('should check the url', function() {
    browser.get('http://localhost:8000/#/sign-up');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/sign-up');
  });
  it('should check the registration form', function(){
    element(by.model('joinData.name')).sendKeys('Max Kushnarov');
    element(by.model('joinData.email')).sendKeys('max_mi_98@mail.ru')
    element(by.model('joinData.password')).sendKeys('123456');
    element(by.model('joinData.confirmPassword')).sendKeys('123456');
    element(by.buttonText('Register')).click();
  });
  it('Should not allow empty form for registration', function() {
    browser.get('http://localhost:8000/#/sign-up');
    element(by.model('joinData.name')).sendKeys(" ");
    element(by.model('joinData.email')).sendKeys(" ");
    element(by.model('joinData.password')).sendKeys(" ");
    element(by.model('joinData.confirmPassword')).sendKeys(" ");
    expect(element(by.buttonText('Register')).isEnabled()).toBeFalsy();
  });
});
