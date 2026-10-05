import { test, expect } from '@playwright/test';

test('TC001_First test', async({page})=>
{
   //Login
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  //Products
  await page.locator('[data-test="title"]').toContainText('Products');
  const products = (await page.locator('.inventory_item_name').allTextContents());
  //const names = await products.allTextContents();
  console.log(products);
  await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Bike Light' }).getByRole('button', { name: 'Add to cart' })
  .click();
await page.locator('.inventory_item').filter({hasText:'Test.allTheThings() T-Shirt (Red)'}).getByRole('button',{name:'Add to cart'}).click();
await page.locator('.shopping_cart_link').click();

  //Your cart
  await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
  await expect(page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
  await page.getByRole('button',{name:'Checkout'}).click();

  //Checkout: Your Information
  //await expect(page).toContainText('Checkout: Your Information');
  await expect(page.locator('text=Checkout: Your Information')).toBeVisible();
  await page.locator('#first-name').fill('Rahul');
  await page.locator('#last-name').fill('Patil');
  await page.locator('#postal-code').fill('413002');
  await page.locator('#continue').click();

  //Checkout: Overview
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
  await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
  await expect(page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
  await expect(page.locator('[data-test="payment-info-label"]')).toContainText('Payment Information:');
  await expect(page.locator('[data-test="shipping-info-label"]')).toContainText('Shipping Information:');
  await expect(page.locator('[data-test="total-info-label"]')).toContainText('Price Total');
  await page.locator('[data-test="finish"]').click();

  //Checkout: Complete!
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');



  
//await page.pause();

})

 