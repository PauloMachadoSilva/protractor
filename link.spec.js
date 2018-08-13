// spec.js
describe ('Protractor Demo App' ,function() { 
  beforeEach(function() { 
    browser.ignoreSynchronization = true;
    browser.get('http://www.agenciap2mk.com.br/wiki-dev/doku.php?id=start');  
  });

  it('Teste link Front-End',function(){
    //Clicando no link
    element(by.linkText('Front-End')).click()
    browser.getCurrentUrl().then(function(url){
      expect(browser.getCurrentUrl())
            .toEqual('http://www.agenciap2mk.com.br/wiki-dev/doku.php?id=front-end');
    
      });

  })
  it('Teste link Back-End',function(){
    //Clicando no link
    element(by.linkText('Back-End')).click()
    browser.getCurrentUrl().then(function(url){
      expect(browser.getCurrentUrl())
            .toEqual('http://www.agenciap2mk.com.br/wiki-dev/doku.php?id=back-end');
    
      });

  })
  it('Teste link scrum',function(){
    //Clicando no link
    element(by.linkText('Scrum')).click()
    browser.getCurrentUrl().then(function(url){
      expect(browser.getCurrentUrl())
            .toEqual('http://www.agenciap2mk.com.br/wiki-dev/doku.php?id=scrum');
    
      });

  })
  
});
