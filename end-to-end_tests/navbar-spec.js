describe('navigation test', function() {
  it('check all links in the navbar', function() {
    browser.get('http://localhost:8000/#/home');
    element(by.id('sign-in')).click();
    element(by.id('contact')).click();
    element(by.id('blog')).click();
    element(by.id('home')).click();
    element(by.id('contact')).click();
  });
})
