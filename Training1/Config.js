exports.config = {
    framework: 'jasmine',
    directConnect : "true",
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['one.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }
