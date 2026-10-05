const {test,expect} = require('@playwright/test');
const { time } = require('node:console');

test('Practice for automation',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("label[for='radio2']").click();

    //await page.getByText('Radio1').click();
    await page.locator("//*[@placeholder='Type to Select Countries']").pressSequentially("ind");
    await page.getByText('India', { exact: true }).click();
    
    await page.locator("#dropdown-class-example").selectOption("option2");

    await page.locator("#checkBoxOption3").check();
    await page.locator("#name").fill("Rahul_Patil");
   
    await page.on('dialog',dialog => dialog.accept());
    await page.locator("#confirmbtn").click();

    expect(await page.locator("#displayed-text").isVisible());
    await page.locator("#hide-textbox").click();
    expect(await page.locator("#displayed-text")).toBeHidden();
    await page.locator("#show-textbox").click();
    expect(await page.locator("#displayed-text").isVisible());

    await page.locator("#mousehover").hover();
    await page.locator("a[href='#top']").click();

    const framesPage=await page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href='lifetime-access']:visible").click();
    const textcheck = await framesPage.locator("div .text h2").textContent();
    console.log(textcheck.split(" ")[1]);

    await page.pause();


    
})