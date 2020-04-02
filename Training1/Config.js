exports.config = {
    framework: 'jasmine',
    directConnect : "true",
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['LaunchGoogle.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }
cd