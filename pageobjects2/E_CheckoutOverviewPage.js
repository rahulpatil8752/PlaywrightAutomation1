  const { expect } = require('@playwright/test');
  
  class E_CheckoutOverviewPage {
  
  constructor(page)
  {
      this.page = page;
      this.checkoutOverviewTitle= page.locator('[data-test="title"]');
      this.p1=page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]');
      this.p2=page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]');
      this.text1=page.locator('[data-test="payment-info-label"]');
      this.text2=page.locator('[data-test="shipping-info-label"]');
      this.text3=page.locator('[data-test="total-info-label"]');
      this.finishButton=page.locator('[data-test="finish"]');
      
      
  }
  
  async checkoutOverview()
  {
      await expect(this.checkoutOverviewTitle).toContainText('Checkout: Overview');
      await expect(this.p1).toContainText('Sauce Labs Bike Light');
      await expect(this.p2).toContainText('Test.allTheThings() T-Shirt (Red)');
      await expect(this.text1).toContainText('Payment Information:');
      await expect(this.text2).toContainText('Shipping Information:');
      await expect(this.text3).toContainText('Price Total');
      await this.finishButton.click();
    
  }
  
  }
  module.exports = {E_CheckoutOverviewPage};
  //Checkout: Overview
  
  
  
  
  








































