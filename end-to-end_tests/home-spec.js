describe('Home page test', function() {
  var title = element.all(by.css(".main-heading"));
  var gallery = element(by.css('.gallery'));
  var galleryView = gallery.all(by.css('.gallery-images'));
  var galleryLinks = element.all(by.id('gallery-img'));

  beforeEach(function() {
    browser.get('http://localhost:8000/#/home');
    browser.manage().window().setSize(1080, 1920);
  });

  it('Should have a titles', function() {
    expect(title.count()).toEqual(2);
    expect(title.get(0).getText()).toEqual('WELCOME TO OUR COMPANY!');
    expect(title.get(1).getText()).toEqual('STRATEGY IS NOTHING WITHOUT EXECUTION');
  });

  it('should check the url', function() {
    browser.get('http://localhost:8000/#/home');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/home');
  });

  it('Click on the gallery links', function() {
    galleryLinks.get(0).click().then(function() {
      galleryView = gallery.element(by.css('.gallery-images:not(.ng-hide)'));
      expect(galleryView.getAttribute('src')).toEqual(galleryLinks.get(0).getAttribute('src'));
    });
    galleryLinks.get(1).click().then(function() {
      galleryView = gallery.element(by.css('.gallery-images:not(.ng-hide)'));
      expect(galleryView.getAttribute('src')).toEqual(galleryLinks.get(1).getAttribute('src'));
    });
    galleryLinks.get(2).click().then(function() {
      galleryView = gallery.element(by.css('.gallery-images:not(.ng-hide)'));
      expect(galleryView.getAttribute('src')).toEqual(galleryLinks.get(2).getAttribute('src'));
    });
    galleryLinks.get(3).click().then(function() {
      galleryView = gallery.element(by.css('.gallery-images:not(.ng-hide)'));
      expect(galleryView.getAttribute('src')).toEqual(galleryLinks.get(3).getAttribute('src'));
    });
  });
});
