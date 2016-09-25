describe('Home page test', function() {
  it('should check the url', function() {
    browser.get('http://localhost:8000/#/home');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/home');
  });
});
