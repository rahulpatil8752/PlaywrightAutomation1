const {test,expect} = require('@playwright/test');


test('Salesforce Login Page',async ({page})=>

{
   
   await page.goto("https://login.salesforce.com");
   await page.locator("xpath=//*[@id='username']").fill("RCV");  //xpath
   await page.locator("#password").fill("RCV");                  //CSS
   await page.locator("#Login").click();
   await page.getByText('Error: Please check your').isVisible();  //Error visible
   await page.locator("#rememberUn").check();
   await page.pause();
   

    
});
