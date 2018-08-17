// spec.js
describe ('Protractor Demo App' ,function() { 
    beforeEach(function() { 
      browser.ignoreSynchronization = true;
      browser.get('http://www.agenciap2mk.com.br/wiki-dev/doku.php?id=start&do=login');  
    });
  
    it('Teste login', function() {
      element(by.id('focus__this')).sendKeys('paulo');
      element(by.css('input[type="password"]')).sendKeys('paulo123');
       
      
      // var elm = element(by.id('front-end'));
      //var EC = protractor.ExpectedConditions;

      var EC = protractor.ExpectedConditions;
      var button = element(by.buttonText('Log In'))
      var isClickable = EC.elementToBeClickable(button);
      
      browser.wait(isClickable, 5000); //wait for an element to become clickable
      button.click();

        // browser.getCurrentUrl().then(function(url){
        //   //it will return exactly user_id value
        //   expect(browser.getCurrentUrl())
        //         .toEqual('http://www.agenciap2mk.com.br/wiki-dev/doku.php?id=start');
        // }); 
  
  });
});