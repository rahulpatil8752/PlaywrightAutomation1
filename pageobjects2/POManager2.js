const { A_LoginPage2 } = require('./A_LoginPage2');
const { B_ProductsPage} = require('./B_ProductsPage');
const { C_YourCartPage }= require('./C_YourCartPage');
const { D_CheckoutInfoPage} = require('./D_CheckoutInfoPage');
const { E_CheckoutOverviewPage} = require('./E_CheckoutOverviewPage');

class POManager2
{
constructor(page)
{
    this.page = page;
    this.loginPage = new A_LoginPage2(this.page);
    this.productsPage = new B_ProductsPage(this.page);
    this.yourcartPage = new C_YourCartPage(this.page);
    this.checkoutInfo = new D_CheckoutInfoPage(this.page);
    this.checkoutOverview = new E_CheckoutOverviewPage(this.page);

}

getLoginPage2()
{
    return this.loginPage;
}

getProductPage2()
{
    return this.productsPage;
}

getYourCartPage()
{
    return this.yourcartPage;
}

getCheckoutInfo()
{
    return this.checkoutInfo;
}

getCheckoutOverview()
{
    return this.checkoutOverview;
}

}
module.exports = {POManager2};