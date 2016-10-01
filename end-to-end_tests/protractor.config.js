exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
   },
  specs: ['home-spec.js', 'contact-spec.js', 'navbar-spec.js', 'sign-in-spec.js', 'sign-up-spec.js']
};
