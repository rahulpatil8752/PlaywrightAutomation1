const {test,expect}=require('@playwright/test')

test('TC001_First Test Case', async({page})=>
{
    await page.goto('https://www.google.com/');

    await page.locator('.gLFyf').first().fill('Rahul');

    await page.pause();

    await page.locator('#username').click()
})