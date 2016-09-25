describe('Contact form test', function() {
  it('should check the url', function() {
    browser.get('http://localhost:8000/#/contacts');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/contacts');
  });
  it('should check the form', function(){
    element(by.model('formData.name')).sendKeys('Max Kushnarov');
    element(by.model('formData.email')).sendKeys('max_mi_98@mail.ru')
    element(by.model('formData.subject')).sendKeys('End-to-End');
    element(by.model('formData.message')).sendKeys('This is End-to-End test for contact page more text more message');
    element(by.buttonText('Send message')).click();
  });
});
