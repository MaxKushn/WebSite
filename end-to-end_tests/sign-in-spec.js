describe('Login test', function() {

  it('should check the url', function() {
    browser.get('http://localhost:8000/#/sign-in');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/sign-in');
  });

  it('should check the login request', function(){
    element(by.model('signInData.email')).sendKeys('max_mi_98@mail.ru')
    element(by.model('signInData.password')).sendKeys('123456')
    element(by.id('logButton')).click();
  });

  it('Should not allow empty form for login', function() {
    browser.get('http://localhost:8000/#/sign-in');
    element(by.model('signInData.email')).sendKeys(" ");
    element(by.model('signInData.password')).sendKeys(" ");
    expect(element(by.id('logButton')).isEnabled()).toBeFalsy();
  });
});
