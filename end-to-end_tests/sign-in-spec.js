describe('Login test', function() {
  it('should check the url', function() {
    browser.get('http://localhost:8000/#/sign-in');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/sign-in');
  });
  it('should check the login request', function(){
    element(by.model('signInData.email')).sendKeys('max_mi_98@mail.ru')
    element(by.model('signInData.password')).sendKeys('123456')
    element(by.id('logButton')).click();
    element(by.id('Sign up now')).click();
  });
});
