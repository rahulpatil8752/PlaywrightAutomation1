const { expect } = require('@playwright/test');

class C_YourCartPage {

constructor(page)
{
    this.page = page;
    this.product1= page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]');
    this.product2 = page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]');
    this.checkoutButton = page.getByRole('button',{name:'Checkout'});
}


async validateYourCart()
{
    await expect(this.product1).toContainText('Sauce Labs Bike Light');
    await expect(this.product2).toContainText('Test.allTheThings() T-Shirt (Red)');
    await this.checkoutButton.click();
}

}
module.exports = {C_YourCartPage};

  
  
  