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

test('UI Controls',async ({page})=>
{
       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       const userName= page.locator("#username");
       const signIn=page.locator("#signInBtn");
       const documentLink=page.locator("[href*='documents-request']");

       const dropdown =page.locator("select.form-control");
       await dropdown.selectOption("consult");
       await page.locator(".radiotextsty").last().click();
       await page.locator("#okayBtn").click();
       //console.log(page.locator(".radiotextsty").last().isChecked());
       //expect(page.locator(".radiotextsty").last()).toBeChecked();
       await page.locator("#terms").check();
       await expect(page.locator("#terms")).toBeChecked();
       await page.locator("#terms").uncheck();
       expect(await page.locator("#terms").isChecked()).toBeFalsy();

       await expect(documentLink).toHaveAttribute("class","blinkingText");


       //await page.pause();


       
    
});

test('Child windows handle',async ({browser})=>
{
       const context = await browser.newContext();
       const page = await context.newPage();
       const userName= page.locator("#username");
       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       
      
       const documentLink=page.locator("[href*='documents-request']");

       const [newPage] = await Promise.all([context.waitForEvent('page'),documentLink.click(),])

        const text = await newPage.locator(".red").textContent();
        const arrayText=text.split("@");
        const domain=arrayText[1].split(" ")[0];
       //console.log(domain);
       await page.locator("#username").fill(domain);
       //await page.pause();
       console.log(await page.locator("#username").inputValue());

      

       

});