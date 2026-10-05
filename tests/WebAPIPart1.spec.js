const {test,expect,request} = require('@playwright/test');

const loginPayLoad = {userEmail: "rahulpatil8752@gmail.com", userPassword: "R@hul8752"};
const orderPayLoad = {orders: [{country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};
let token;
let orderId;

test.beforeAll( async()=>
{
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
        {
            data: loginPayLoad
        })
        expect(loginResponse.ok().toBeTruthy);
        const loginResponseJson = await loginResponse.json();
         token = loginResponseJson.token;
        console.log(token);


        const orderResponse=await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
            {
                data: orderPayLoad,
                headers: {
                    'Authorization' : token,
                    'Content-type' : application/json
                },
            })
           const orderResponseJson = await orderResponse.json();
           orderId=orderResponseJson.orders[0];
});

test.beforeEach( ()=>
{

});

// before all --->test1, test2, test3



test('Place the Order',async ({page})=>

{
    page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    }, token);
   
   await page.goto("https://rahulshettyacademy.com/client");
   const email = "rahulpatil8752@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
//    await page.locator("#userEmail").fill(email);
//    await page.locator("#userPassword").fill("R@hul8752");
//    await page.locator("[value='Login']").click();
//    await page.waitForLoadState('networkidle');
// await page.locator(".card-body b").first().waitFor();
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
    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
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
