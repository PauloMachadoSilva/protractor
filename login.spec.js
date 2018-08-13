// spec.js
describe ('Protractor Demo App' ,function() { 
    beforeEach(function() { 
      browser.ignoreSynchronization = true;
      browser.get('http://www.agenciap2mk.com.br/wiki-dev/doku.php?id=start&do=login');  
    });
  
    it('Teste login', function() {
      element(by.css('input[type="text"]')).sendKeys('paulo');
      element(by.css('input[type="password"]')).sendKeys('paulo123');
      element(by.buttonText('Log In')).click()  
  
        browser.getCurrentUrl().then(function(url){
          //it will return exactly user_id value
          expect(browser.getCurrentUrl())
                .toEqual('http://www.agenciap2mk.com.br/wiki-dev/doku.php?id=start');
        });
  
  });
});