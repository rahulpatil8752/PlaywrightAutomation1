const {test,expect} = require('@playwright/test');
const { time } = require('node:console');

test('Browser Context Playwright test',async ({page})=>
{

       const userName= page.locator("#userEmail");
       const passWordField= page.locator("[type='password']");
       const logIn=page.locator("[value='Login']");
       const products =page.locator(".card-body");
       const productName= 'ZARA COAT 3'


       await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
       console.log(await page.title());
       // css type and fill 
       await userName.fill("rahulpatil8752@gmail.com");
       await passWordField.fill("R@hul8752");
       await logIn.click(); 

       //await page.waitForLoadState('networkidle');
       await page.locator(".card-body b").first().waitFor();

       const titles=await page.locator(".card-body b").allTextContents();
       console.log(titles);

       const count = await products.count();
       for(let i=0; i<count; ++i)
       {
        if(await products.nth(i).locator("b").textContent()===productName)
            {
              //add to cart
              await products.nth(i).locator("text= Add To Cart").click();
              break;
            }
       }

       //await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add To Cart"}).click();
      
       await page.locator("[routerlink*='cart']").click();
       await page.locator("div li").first().waitFor();

       const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
       expect(bool).toBeTruthy();

       await page.locator("text=Checkout").click();
       await page.locator("[placeholder*='Select Country']").pressSequentially("ind",{delay:100});
       const dropdown=page.locator(".ta-results");
       await dropdown.waitFor();
       const optionsCount = await dropdown.locator("button").count();
       for(let i=0; i<optionsCount; ++i)
       {
            const text = await dropdown.locator("button").nth(i).textContent();
            if(text === " India")
            {
                await dropdown.locator("button").nth(i).click();
                break;
            }
       }
      

    await page.pause();
});


