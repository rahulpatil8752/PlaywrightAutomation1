const {test,expect} = require('@playwright/test')

test('E2E Scenario for Practice', async({page})=>
{
   const BASE_URL = 'https://eventhub.rahulshettyacademy.com';

   await page.goto(BASE_URL);
   console.log(await page.title());

  await page.getByRole('textbox', { name: 'Email' }).fill('rahulpatil8752@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('R@hul8752');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page.getByRole('main')).toContainText('Browse Events →');

  await page.goto('https://eventhub.rahulshettyacademy.com/admin/events');

 
  const eventTitle = `Test Event ${Date.now()}`;
  console.log(eventTitle);

  await page.getByTestId('event-title-input').fill(eventTitle);
  await page.getByRole('textbox', { name: 'Describe the event…' }).fill('Description for new event');
  await page.getByRole('textbox', { name: 'City*' }).fill('Hyderabad');
  await page.getByRole('textbox', { name: 'Venue*' }).fill('Marriot Hotel');
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2027-06-08T04:36');
  await page.getByRole('spinbutton', { name: 'Price ($)*' }).fill('100');
  await page.getByRole('spinbutton', { name: 'Total Seats*' }).fill('100');
  await page.getByTestId('add-event-btn').click();

  await expect(page.getByText('Event created!')).toBeVisible();

  await page.goto("https://eventhub.rahulshettyacademy.com/events");

  const eventCards= page.locator("#event-card");
  await expect(eventCards.first()).toBeVisible();

  console.log(eventCards);
  await page.locator('article').filter({ hasText: eventTitle }).getByRole('link', { name: 'Book Now' }).click();

  await expect(page.locator('#ticket-count')).toContainText('1');
  await page.getByRole('textbox', { name: 'Full Name*' }).fill('Rahul');
  await page.getByTestId('customer-email').fill('rahulpatil8752@gmail.com');
  await page.getByRole('textbox', { name: 'Phone Number*' }).fill('8975573933');
 // await expect(page.getByRole('main')).toContainText('Booking Confirmed! 🎉');
  await page.getByRole('button', { name: 'View My Bookings' }).click();

   //await page.pause();

})