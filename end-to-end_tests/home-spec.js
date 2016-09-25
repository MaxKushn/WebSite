describe('Home page test', function() {
  it('should check the url', function() {
    browser.get('http://localhost:8000/#/home');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/home');
  });
  // it('should ckech active img on the gallery', function() {
  //   expect(element(by.id('gallery-img')).element(by.tagName('img'))).toEqual()
  // });
});
