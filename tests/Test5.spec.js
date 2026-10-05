const {test, expect} = require('@playwright/test')

test('TC001-Validate first test case', async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('rahulpatil8752@gmail.com');
    await page.locator('#userPassword').fill('R@hul8752');
    await page.locator('#login').click();

    await page.waitForLoadState('networkidle');

    const products=await page.locator('.card-body');
    await products.filter({hasText:'ADIDAS ORIGINAL'}).getByRole('button',{name:' Add To Cart'}).click();
    await products.filter({hasText:'ZARA COAT 3'}).getByRole('button',{name:' Add To Cart'}).click();
    await products.filter({hasText:'iphone 13 pro'}).getByRole('button',{name:' Add To Cart'}).click();

    await page.locator("//*[@routerlink='/dashboard/cart']").click();

    //await page.pause();

    const addToCartProducts = await page.locator('.infoWrap');
    await addToCartProducts.filter({hasText:'ADIDAS ORIGINAL'}).getByRole('button', {name:'Buy Now'}).click();
    await page.getByPlaceholder('Select Country').pressSequentially('ind',{delay:100});
    await page.getByRole('button',{name:'India'}).nth(1).click();
    await page.getByText('Place Order').click();

    await page.getByText(' Thankyou for the order. ').isVisible();
     //await addToCartProducts.filter({hasText:'iphone 13 pro'}).getByRole('button', {name:'Buy Now'}).click();


})


