const{test,expect}=require('@playwright/test')

test('First test1', async({page})=>
{
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   // page.locator('#username').fill('rahulshettyacademy ');
    await page.getByLabel('Username:').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');

    await page.locator("//*[@value='user']").click();

   // const dropdown= await page.locator('.form-group');
    const dropdown = page.getByRole('combobox');
    await dropdown.selectOption('Consultant');

    //await page.locator('#terms').check();

    //page.pause();

}
)

// test('second test', async ({page})=>
// {

// })