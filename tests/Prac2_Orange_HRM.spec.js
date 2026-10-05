const {test, expect} = require('@playwright/test');
 //const {POManager1} = require('../pageobjects1/POManager1');


test('Validation for Orange-HRM site', async({page}) => {

    //const poManager1 = new POManager1(page);
    
      const BASE_URL='https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
      const username = "Admin";
      const password = "admin123";

      await page.goto(BASE_URL);
      await page.getByPlaceholder('Username').fill(username);
      await page.getByPlaceholder('Password').fill(password);
      await page.getByRole('button',{name:' Login '}).click();

      await page.waitForLoadState('networkidle');

      //await page.pause();
      await expect(page.locator('.oxd-brand-banner')).toBeVisible();

      //Dashboard
      await expect(page.getByText('Time at Work')).toBeVisible();
      await expect(page.getByText('My Actions')).toBeVisible();
      await expect(page.getByText('Quick Launch')).toBeVisible();
      await expect(page.locator('#app')).toContainText('Buzz Latest Posts');
      await expect(page.getByText('Employees on Leave Today')).toBeVisible();
      await expect(page.getByText('Employee Distribution by Sub')).toBeVisible();
      await expect(page.getByText('Employee Distribution by Location')).toBeVisible();
      

      //Admin
      await page.getByRole('link', {name:'Admin'}).click();

     await page.locator('.oxd-input--active').nth(1).fill('Admin');
     await page.getByText('-- Select --').first().click();
     await page.getByRole('option', { name: 'Admin' }).click();
    //  await page.getByPlaceholder('Type for hints...').fill('Pat Rah');
    await page.getByText('-- Select --').last().click();
    await page.getByRole('option', { name: 'Enabled' }).click();

    await page.getByRole('button', {name:' Search '}).click();

     await expect(page.getByText('Admin').nth(3)).toBeVisible();
    //await expect(page.getByRole('table').getByText('Enabled')).toBeVisible();



     await page.pause();


    

      


     
}
   

);