const {test,expect} = require('@playwright/test');
const { time } = require('node:console');

test('Child Window Handle',async ({browser})=>
{
       
       
       const context = await browser.newContext();
       const page = await context.newPage();


       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       const documentLink=page.locator("[href*='documents-request']");

       //Promise- pending,rejected,fulfuilled
       
       const [newPage] = await Promise.all(
        [
           context.waitForEvent('page'),  //listen for any new page
           documentLink.click(),// new page is opened

        ])
       const text=await newPage.locator(".red").textContent();
       const arrayText = text.split("@");
       const domain = arrayText[1].split(" ")[0]
       //console.log(domain);
       await page.locator("#username").fill(domain);

       await page.pause();

       console.log(await page.locator("#username").inputValue());
      
      
    
});


