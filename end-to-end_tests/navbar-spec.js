describe('navigation test', function() {
  it('check all links in the navbar', function() {
    browser.get('http://localhost:8000/#/home');
    element(by.id('sign-in')).click().then(function() {
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/sign-in')
    });
    element(by.id('blog')).click().then(function() {
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/blog')
    });
    element(by.id('home')).click().then(function() {
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/home')
    });
    element(by.id('contact')).click().then(function() {
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/contacts')
    });
  });
})
