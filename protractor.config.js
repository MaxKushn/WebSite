exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
   },
  specs: ['./end-to-end_tests/*-spec.js']
};
