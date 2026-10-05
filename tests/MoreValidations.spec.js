const {test,expect} = require('@playwright/test')

test("Popup validations",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://google.com");
    // await page.goBack();
    // await page.goForward();

    expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    expect(page.locator("#displayed-text")).toBeHidden();

    //page.pause();

    await page.on('dialog',dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();

    const framesPage = await page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href='lifetime-access']:visible").click();
    const textcheck = await framesPage.locator("div .text h2").textContent();
    console.log(textcheck.split(" ")[1]);



})