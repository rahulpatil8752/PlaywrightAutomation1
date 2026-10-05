const {test,expect} = require('@playwright/test');
const { time } = require('node:console');

test('First test case',async ({browser})=>
{
       
       
       const context = await browser.newContext();
       const page = await context.newPage();


       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       console.log(await page.title()); 
       //css selectors mainly used
       await page.locator("#username").fill("rahulshetty");
       await page.locator("[type='password']").fill("Learning@830$3mK2)");
       await page.locator("#signInBtn").click();
       console.log(await page.locator("//div[@class='alert alert-danger col-md-12']").textContent());
       await expect(page.locator("//div[@class='alert alert-danger col-md-12']")).toContainText("Incorrect username/password.")
       //await page.pause();

    
});


