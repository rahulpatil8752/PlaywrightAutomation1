const {test,expect} = require('@playwright/test');
const { time } = require('node:console');
const { Test_url } = require('node:inspector');



test('TC001_Launch portal through browser',async ({browser})=>
{
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto('https://rahulshettyacademy.com/client');
       console.log(await page.title()); 
    
});

test('TC002_Second Test case',async ({page})=>
{
       await page.goto("https://www.google.com");
       console.log(await page.title());
       await expect(page).toHaveTitle("Google");
       //await page.pause()
});
test('TC003_Third test case',async ({page})=>
{
       await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
       console.log(await page.title());
       // css type and fill 
        
});