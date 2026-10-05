 const {test, expect} = require('@playwright/test');
 const {POManager2} = require('../pageobjects2/POManager2');


test('TC_001-Complete End-End Flow of Testing', async({page}) => {

  const poManager2 = new POManager2(page);
    
    const username = "standard_user";
    const password = "secret_sauce";
    

    const loginPage2 = poManager2.getLoginPage2();
     await loginPage2.goTo();
     await loginPage2.validLogin(username,password);

    const productPage2 = poManager2.getProductPage2();
     await productPage2.allProducts();
     await productPage2.selectProducts();

    const yourCart = poManager2.getYourCartPage();
     await yourCart.validateYourCart();

    const checkoutInfo = poManager2.getCheckoutInfo();
     await checkoutInfo.checkoutYourInfo();

    const checkoutOverView = poManager2.getCheckoutOverview();
     await checkoutOverView.checkoutOverview();
  
     
});


