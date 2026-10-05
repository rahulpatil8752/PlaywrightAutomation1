const {test,expect} = require('@playwright/test');
const { time } = require('node:console');

test('Browser Context Playwright test',async ({page})=>
{

       const userName= page.getByPlaceholder("email@example.com");
       const passWordField= page.getByPlaceholder("enter your passsword");
       const logIn=page.getByRole("button",{name:"Login"});
       const products =page.locator(".card-body");
       const productName= 'ZARA COAT 3';
       const email='rahulpatil8752@gmail.com';


       await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
       console.log(await page.title());
       // css type and fill 
       await userName.fill(email);
       await passWordField.fill("R@hul8752");
       await logIn.click(); 

       //await page.waitForLoadState('networkidle');
       await page.locator(".card-body b").first().waitFor();

       const titles=await page.locator(".card-body b").allTextContents();
       console.log(titles);

       await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add To Cart"}).click();
      
       await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();
       await page.locator("div li").first().waitFor();

        await expect(page.getByText("ZARA COAT 3")).toBeVisible();

       await page.getByRole("button",{name:"Checkout"}).click();
       await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:100});
       await page.getByRole("button",{name:"India"}).nth(1).click();

       await page.getByText("PLACE ORDER").click();

       await expect(page.getByText("Thankyou for the order.")).toBeVisible();
       const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
       console.log(orderId);

       

     
      

    //await page.pause();
});


