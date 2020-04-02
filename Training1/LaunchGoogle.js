
describe('Jenkin', function() {
    it('Launchgoogle', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com/');
      browser.sleep('10000');
      console.log("Launched google");
     });
  });
