const {test,expect} = require('@playwright/test');


test('Playwright Special locators',async ({page})=>
{
       await page.goto("https://rahulshettyacademy.com/angularpractice/");
       await page.locator("div.form-group input[name='name']").fill("Rahul")
       await page.locator("[name='email']").fill("rahulpatil8752@gmail.com");

       await page.getByPlaceholder("Password").fill("R@hul8752");
       await page.getByLabel("Check me out if you Love IceCreams!").check();

       await page.getByLabel("Gender").selectOption("Female");
       await page.getByLabel("Employed").click();

       await page.getByRole("button", {name:'Submit'}).click();

       await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
       await page.getByRole("link", {name : "Shop"}).click();

       await page.locator("app-card").filter({hasText: 'Blackberry'}).getByRole("button").click();
       //await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click(); 
       


});




      

       

