describe('Contact form test', function() {
  var title = element(by.css(".contacts-map"));
  var columnsNames = element.all(by.css(".contact-column"));
  var EC = protractor.ExpectedConditions;

  it('should check the url', function() {
    browser.get('http://localhost:8000/#/contacts');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/contacts');
  });

  it('should have a title', function() {
    expect(title.getText()).toEqual('OUR LOCATION');
  });

  it('names of the colums in ContactPage', function() {
    expect(columnsNames.count()).toEqual(2);
    expect(columnsNames.get(0).getText()).toEqual('CONTACT FORM');
    expect(columnsNames.get(1).getText()).toEqual('CONTACT INFORMATION');
  });

  it('should check the form', function(){
    element(by.model('formData.name')).sendKeys('Max Kushnarov');
    element(by.model('formData.email')).sendKeys('max_mi_98@mail.ru')
    element(by.model('formData.subject')).sendKeys('End-to-End');
    element(by.model('formData.message')).sendKeys('This is End-to-End test for contact page more text more message');
    element(by.buttonText('Send message')).click();
  });

  it('should not pass empty form for sending messages', function(){
    element(by.model('formData.name')).sendKeys('');
    element(by.model('formData.email')).sendKeys('')
    element(by.model('formData.subject')).sendKeys('');
    element(by.model('formData.message')).sendKeys('');
    expect(element(by.buttonText('Send message')).isEnabled()).toBeFalsy();
  });
});
