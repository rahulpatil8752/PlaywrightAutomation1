import { test, expect } from '@playwright/test';

test('TC001_First test', async({browser})=>
{

    const context = await browser.newContext();
       const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    //await page.locator('#login').click();


   // await page.waitForLoadState('networkidle');

   //await console.log(await page.locator('.card-body b').allTextContents());

   //await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add To Cart"}).click();

  // await page.locator(".card-body").filter({hasText:'ZARA COAT 3'}).getByRole('button', { name:'Add To Cart'}).click();

    const dropDown=await page.locator('select.form-control');
    await dropDown.selectOption('Teacher');

   await page.locator(".radiotextsty").last().click();
    //await page.getByRole('radio', { name: 'User' });

    await page.getByRole('button', { name: 'Okay' }).click();

   // await page.locator('.terms').check();
    await page.locator('#terms').check();
    await expect(page.locator('#terms')).toBeChecked();

    const documentLink=await page.getByRole('link',{name:'Free Access to InterviewQues/ResumeAssistance/Material'});
    const [newPage] = await Promise.all(
        [
           context.waitForEvent('page'),  //listen for any new page
           documentLink.click(),// new page is opened

        ])

        const redText= await newPage.locator('.red').textContent();
        const arrayText=redText.split('@');
        const domain = arrayText[1].split(" ")[0];
        console.log(domain);
        
        
  


    

  

})

 