describe('Blog test', function() {
  var title = element.all(by.css(".main-heading"));
  var blogHead = element.all(by.css('.blog-heading'));

  it('should check the url', function() {
    browser.get('http://localhost:8000/#/blog');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/blog');
  });

  it('should have a title', function() {
    expect(title.get(0).getText()).toEqual('BLOG');
    expect(title.get(1).getText()).toEqual('CATEGORIES');
    expect(title.get(2).getText()).toEqual('POLL');
  });

  it('should have 3 heading', function(){
    expect(blogHead.count()).toEqual(3);
  });
});
