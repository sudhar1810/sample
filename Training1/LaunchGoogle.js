//console.log("checking");
//console.log("integrating with jenkins");
describe('Jenkin trial', function() {
    it('openinggoogle', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com/');
      browser.sleep('10000');
      console.log("checking");
     });
  });
