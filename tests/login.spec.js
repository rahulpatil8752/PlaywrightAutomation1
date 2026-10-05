const { test, expect } = require('@playwright/test');
const { getExcelData } = require('../utils/excelUtils');

const testData = getExcelData('./testdata/testData.xlsx', 'Sheet1');
//const BASE_URL = 'https://rahulshettyacademy.com/client';

for (const data of testData) {
 
  test("Login and add to cart for " + data.productName, async ({page,baseURL},testInfo) =>
    {
 
    console.log("Test Data:", testData);
// ✅ Get from config
  const username = testInfo.project.use.username;
  const password = testInfo.project.use.password;


    // Step 1: Open login page
    await page.goto(baseURL);

    // Step 2: Login
    await page.locator('#userEmail').fill(username);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();

    // Step 3: Wait for products page
    await page.waitForLoadState('networkidle');

    // Step 4: Find product and add to cart
    const products = page.locator('.card-body');
    const count = await products.count();

    for (let i = 0; i < count; i++) {
      const productText = await products.nth(i).locator('b').textContent();

      if (productText.trim() === data.productName) {
        await products.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }

    // Step 5: Go to cart
    await page.locator("[routerlink*='cart']").click();

    // Step 6: Verify product in cart
    await page.locator("div li").first().waitFor();
    const isVisible = await page.locator(`h3:has-text("${data.productName}")`).isVisible();
    await expect(isVisible).toBeTruthy();


    // Step 7: Click on Book Now Button
    await page.locator('li').filter({ hasText: data.productName }).getByRole('button', { name: 'Buy Now' }).click();
    await expect(page.getByText(username)).toBeVisible();

    await page.getByPlaceholder('Select Country').pressSequentially("ind",{delay:100});
    await page.getByRole("button",{name:"India"}).nth(1).click();

    await page.getByText("PLACE ORDER").click();

    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
  });
}