const {test,expect} = require('@playwright/test')

test.describe.configure({mode:'parallel'});   // To run both the test cases in parallel
test('TC_001 Single ticket booking is eligible for refund', async({page})=>
{
   const  BASE_URL = 'https://eventhub.rahulshettyacademy.com';
   
   await page.goto(BASE_URL);

   await page.locator('#email').fill('rahulpatil8752@gmail.com');
   await page.locator('#password').fill('R@hul8752');
   await page.locator('#login-btn').click();

   await page.waitForLoadState('networkidle');
   await expect(page.getByRole('link', {name:'Browse Events →'})).toBeVisible();

   await page.goto(BASE_URL + '/events');

   await page.locator('#event-card').filter({hasText:'Test Event 1780914237435'}).locator('#book-now-btn').click();
    
   await expect(page.locator('#ticket-count')).toContainText('1');
   await page.locator('#customerName').fill('Rahul Patil');
   await page.locator('#customer-email').fill('rahulpatil8752@gmail.com');
   await page.locator('#phone').fill('8975573933');
   await page.locator('#confirm-booking').click();

   await page.waitForLoadState('networkidle');

   await page.getByRole('button',{name:'View My Bookings'}).click();
   await expect(page).toHaveURL(BASE_URL + '/bookings');

   await page.locator('#booking-card').filter({hasText:'Test Event 1780914237435'}).getByRole('button',{name:'View Details'}).first().click();
    
   await expect(page.getByRole('heading', { name: 'Event Details' })).toBeVisible();

   const text = await page.locator('.font-bold').nth(1).textContent();
   console.log(text);

   const text2 = await page.locator('.font-bold').nth(2).textContent();
   console.log(text2);

   // Extract first characters
   const bookRefFirstChar = text.trim().charAt(0);
   const eventFirstChar = text2.trim().charAt(0);

   // Assertion
   expect(bookRefFirstChar).toBe(eventFirstChar);

   await page.locator('#check-refund-btn').click();

   await expect(page.locator('#refund-spinner')).toBeVisible();

   // Assume correct spinner locator
   const spinner = page.locator('#refund-spinner'); // update selector if needed

   // Assert spinner is gone within 6 seconds
   await expect(spinner).toBeHidden({ timeout: 6000 });

   await page.locator('#refund-result').isVisible();
   await expect(page.locator('#refund-result')).toHaveText('Eligible for refund. Single-ticket bookings qualify for a full refund.');

})

test('TC_002_Validate Group ticket booking is NOT eligible for refund', async({page})=>
{
   const  BASE_URL = 'https://eventhub.rahulshettyacademy.com';
   
   await page.goto(BASE_URL);

   await page.locator('#email').fill('rahulpatil8752@gmail.com');
   await page.locator('#password').fill('R@hul8752');
   await page.locator('#login-btn').click();

   await page.waitForLoadState('networkidle');
   await expect(page.getByRole('link', {name:'Browse Events →'})).toBeVisible();

   await page.goto(BASE_URL + '/events');

   await page.locator('#event-card').filter({hasText:'Test Event 1780914237435'}).locator('#book-now-btn').click();
    
   await expect(page.locator('#ticket-count')).toContainText('1');
   await page.getByRole('button',{name:"+"}).dblclick();

   await page.locator('#customerName').fill('Rahul Patil');
   await page.locator('#customer-email').fill('rahulpatil8752@gmail.com');
   await page.locator('#phone').fill('8975573933');
   await page.locator('#confirm-booking').click();

   await page.waitForLoadState('networkidle');

   await page.getByRole('button',{name:'View My Bookings'}).click();
   await expect(page).toHaveURL(BASE_URL + '/bookings');

   await page.locator('#booking-card').filter({hasText:'Test Event 1780914237435'}).getByRole('button',{name:'View Details'}).first().click();
    
   await expect(page.getByRole('heading', { name: 'Event Details' })).toBeVisible();

   const text = await page.locator('.font-bold').nth(1).textContent();
   console.log(text);

   const text2 = await page.locator('.font-bold').nth(2).textContent();
   console.log(text2);

   // Extract first characters
   const bookRefFirstChar = text.trim().charAt(0);
   const eventFirstChar = text2.trim().charAt(0);

   // Assertion
   expect(bookRefFirstChar).toBe(eventFirstChar);

   await page.locator('#check-refund-btn').click();

   await expect(page.locator('#refund-spinner')).toBeVisible();

   // Assume correct spinner locator
   const spinner = page.locator('#refund-spinner'); // update selector if needed

   // Assert spinner is gone within 6 seconds
   await expect(spinner).toBeHidden({ timeout: 6000 });

   await page.locator('#refund-result').isVisible();
   await expect(page.locator('#refund-result')).toHaveText('Not eligible for refund. Group bookings (3 tickets) are non-refundable.');

})


