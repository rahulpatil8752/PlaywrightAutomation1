const {test,expect} = require('@playwright/test')

test('Second Test', async({page})=>
{
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   await expect(page.getByRole('link', {name:'Free Access to Interview'})).toBeVisible();

   await page.locator("//*[@name='username']").fill('rahulshettyacademy');
   await page.getByLabel('Password:').fill('Learning@830$3mK2');

   await page.locator("(//*[@class='checkmark'])[2]").click();

   const dropDown = await page.locator('select.form-control');
   dropDown.selectOption('Teacher');

   await page.getByRole('button',{name:'Okay'}).click();

   await page.locator('#terms').check();

   //await page.locator('#signInBtn').click();

   //console.log(await page.locator('.alert.alert-danger.col-md-12').textContent());

   await page.getByRole('link', {name:'Free Access to Interview'}).click();



   await page.pause();

})