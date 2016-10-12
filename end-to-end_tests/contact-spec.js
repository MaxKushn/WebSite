describe('Contact form test', function() {
  var title = element(by.css(".contacts-map"));
  var columnsNames = element.all(by.css(".contact-column"));
  var EC = protractor.ExpectedConditions;
  var name = element(by.model('formData.name'));
  var email = element(by.model('formData.email'));
  var subject = element(by.model('formData.subject'));
  var message = element(by.model('formData.message'));

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
    name.sendKeys('Max Kushnarov');
    email.sendKeys('max_mi_98@mail.ru')
    subject.sendKeys('End-to-End');
    message.sendKeys('This is End-to-End test for contact page more text more message');
    element(by.buttonText('Send message')).click().then(function(){
      expect(name.getAttribute('value')).toBe('');
      expect(email.getAttribute('value')).toBe('');
      expect(subject.getAttribute('value')).toBe('');
      expect(message.getAttribute('value')).toBe('');
    })
  });

  it('should not pass empty form for sending messages', function(){
    name.sendKeys('');
    email.sendKeys('')
    subject.sendKeys('');
    message.sendKeys('');
    expect(element(by.buttonText('Send message')).isEnabled()).toBeFalsy();
  });
});
