const {test,expect} = require('@playwright/test');
const { time } = require('node:console');

test('Browser Context Playwright test',async ({page})=>
{
       

       const userName= page.locator("#username");
       const passWordField= page.locator("[type='password']");
       //const signIn=page.locator("#signInBtn");
       


       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       console.log(await page.title());
       // css type and fill 
       await userName.fill("rahulshettyacademy");
       await passWordField.fill("Learning@830$3mK2");

       const dropdown = page.locator("select.form-control");
       await dropdown.selectOption("consult");



       //await signIn.click(); 
      //await page.pause();
       
       

    
});


