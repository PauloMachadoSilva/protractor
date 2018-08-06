// spec.js
describe ('Protractor Demo App' ,function() {
  it('should add one and two', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://testing-ground.scraping.pro/login');
    
    //bloco 1
    // element(by.css('input[type="text"]')).sendKeys('paulo');
    // element(by.css('input[type="password"]')).sendKeys('paulo123');

    element(by.id('usr')).sendKeys('admin');
    element(by.id('pwd')).sendKeys('12345');
    

    element(by.css('input[type="submit"]')).click()

    //  expect(
    //    browser.wait(function() {
    //    browser.getCurrentUrl().toEqual('https://ativainvestimentos.com.br')
    //    },10000));
    // expect(
    //    browser.wait(function() {
    //     return browser.getCurrentUrl().then(function(url) {
    //       return 'https://ativainvestimentos.com.br';
    //     });
    //   }, 10000, "URL hasn't changed"));
 
    
      browser.getCurrentUrl().then(function(url){
        //it will return exactly user_id value
        expect(browser.getCurrentUrl())
              .toEqual('http://testing-ground.scraping.pro/login?mode=welcomeeee');
      
      });

    
    
    //element(by.id('ConteudoPrincipal_ConteudoPrincipal_ConteudoPrincipal_ConteudoPrincipal_lkbOk')).click();
    // var key =  element(by.cssContainingText('.btTecla', '1 ou 4'));
    
    // element(by.model('second')).sendKeys(2);
    // element(by.id('gobutton')).click();
    // expect(element(by.binding('latest')).getText()).
    // toEqual('5'); // This is wrong!

//   it('Verifcar texto da página' ,function() {
//     browser.driver.get('http://juliemr.github.io/protractor-demo/');
//     var title = element(by.css('h3'));
//     expect(title.getText()).toEqual('Super Calculatorr');
    
// //    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});
