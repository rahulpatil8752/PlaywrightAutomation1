import { test, expect } from '@playwright/test';



test('Validation of Hidden Element', async({page}) => {


 await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//  await page.goto("https://www.google.com/");
//  await page.goBack();

await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();


//Pop-up

//await page.pause();
await page.on('dialog',dialog => dialog.accept());
//await page.on('dialog',dialog => dialog.dismiss());
await page.locator('#confirmbtn').click();

//hover
await page.locator('#mousehover').hover();

//iframe
const framesPage= page.frameLocator("#courses-iframe");
await framesPage.locator("li a[href*='lifetime-access']:visible").click();
const textCheck=await framesPage.locator(".text h2").textContent();
console.log(textCheck.split(" ")[1]);


});

