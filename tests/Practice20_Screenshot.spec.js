import { test, expect } from '@playwright/test';



test('Screenshot and Visual Comparision', async({page}) => {

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//  await page.goto("https://www.google.com/");
//  await page.goBack();

await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#displayed-text").screenshot({path:'partialScreenshot.png'});
await page.locator("#hide-textbox").click();

await page.screenshot({path:'screenshot.png'});
await expect(page.locator("#displayed-text")).toBeHidden();


});

test.only('Visual Comparision', async({page}) => {

await page.goto("https://www.flightaware.com/");

expect(await page.screenshot()).toMatchSnapshot('flightware.png');


});

