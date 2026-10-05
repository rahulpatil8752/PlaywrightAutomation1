const {test,expect} = require('@playwright/test');
const { time } = require('node:console');

test('Browser Context Playwright test',async ({page})=>
{

       const userName= page.locator("#userEmail");
       const passWordField= page.locator("[type='password']");
       const logIn=page.locator("[value='Login']");
       //const cardTitles =page.locator(".card-body a");


       await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
       console.log(await page.title());
       // css type and fill 
       await userName.fill("rahulpatil8752@gmail.com");
       await passWordField.fill("R@hul8752");
       await logIn.click(); 

       //await page.waitForLoadState('networkidle');
       await page.locator(".card-body b").first().waitFor();

       const titles=await page.locator(".card-body b").allTextContents();
       console.log(titles);
      

       //console.log(await cardTitles.first().textContent());
       //console.log(await cardTitles.nth(1).textContent());
       //const allTitles=await cardTitles.allTextContents();
       //console.log(allTitles);

    
});


