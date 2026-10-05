const { expect } = require('@playwright/test');

class D_CheckoutInfoPage {

constructor(page)
{
    this.page = page;
    this.checkoutTitle= page.locator('text=Checkout: Your Information');
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue').click();
}


async checkoutYourInfo()
{
    await expect(this.checkoutTitle).toBeVisible();
    await this.firstName.fill('Rahul')
    await this.lastName.fill('Patil');
    await this.postalCode.fill('413002')
}

}
module.exports = {D_CheckoutInfoPage};

 