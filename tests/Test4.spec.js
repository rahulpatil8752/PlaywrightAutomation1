const {test,expect} = require('@playwright/test');



test('TC1_Launch portal through browser', async ({ page, baseURL }) => {
    await page.goto(baseURL);
    console.log(await page.title());

})


