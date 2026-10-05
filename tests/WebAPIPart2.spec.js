const {test,expect} = require('@playwright/test');
const { time } = require('node:console');

let webContext;
test.beforeAll(async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();

    const email = "rahulpatil8752@gmail.com";

   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("R@hul8752");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await context.storageState({path: 'state.json'});
   webContext=await browser.newContext({storageState:'state.json'});
})


test('@WC Client App login',async ()=>

{
   
   const productName = 'ZARA COAT 3';
   const page = await webContext.newPage();
   const products = page.locator(".card-body");
   
   await page.goto("https://rahulshettyacademy.com/client");
   
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
     //  await page.pause();

     await page.locator("[routerlink*='cart']").click();
     await page.locator("div li").first().waitFor();
     const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
     expect(bool).toBeTruthy();

     await page.locator("text=Checkout").click();
     await page.locator("[placeholder*='Country']").pressSequentially("ind");

     const dropdown = page.locator(".ta-results");
     await dropdown.waitFor();
     const optionsCount = await dropdown.locator("button").count();

     for(let i=0; i<optionsCount; i++)
    {
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text ===" India")
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }

    }
    expect(page.locator(".user__name [type='text']").first()).toHaveText("rahulpatil8752@gmail.com");
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

    const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);

    await page.locator("button[routerlink*='myorders']").click();
    const rows = await page.locator("tbody tr");

    for(let i=0; i<await rows.count(); i++)
    {
        const rowOrderId=await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    
});

test('Test case 2',async ()=>

{
   
   const productName = 'ZARA COAT 3';
   const page = await webContext.newPage();
   const products = page.locator(".card-body");
   
   await page.goto("https://rahulshettyacademy.com/client");
   
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);
})
