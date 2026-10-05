const {test,expect} = require('@playwright/test');
const { time } = require('node:console');

test('Browser Context Playwright test',async ({browser})=>
{
       
       
       const context = await browser.newContext();
       const page = await context.newPage();

       const userName= page.locator("#username");
       const passWordField= page.locator("[type='password']");
       const signIn=page.locator("#signInBtn");
       const cardTitles =page.locator(".card-body a");


       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       console.log(await page.title());
       // css type and fill 
       await userName.fill("rahulshetty");
       await passWordField.fill("Learning@830$3mK2");
       await signIn.click(); 
       console.log(await page.locator("[style*='block']").textContent());
       //await expect(page.locator("style*='block']")).toContainText('incorrect');
       await userName.fill("");
       //await userName.clear();
      
       await userName.fill("rahulshettyacademy");
       await signIn.click(); 

       console.log(await cardTitles.first().textContent());
       console.log(await cardTitles.nth(1).textContent());
       const allTitles=await cardTitles.allTextContents();
       console.log(allTitles);

    
});


