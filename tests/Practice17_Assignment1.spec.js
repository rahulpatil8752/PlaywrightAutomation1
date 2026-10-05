import { test, expect } from '@playwright/test';

test('Assignment-1 Practice', async ({ page }) => {

    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByPlaceholder("you@email.com").fill("rahulpatil8752@gmail.com");
    await page.getByLabel("Password").fill("R@hul8752");
    await page.locator("#login-btn").click();
    
    await expect(page.getByRole('link',{name:'Browse Events →'})).toBeVisible();

});

test.only('create event via UI, book it, and verify seat reduction', async({page}) => {

const BASE_URL = 'https://eventhub.rahulshettyacademy.com'
await page.goto(BASE_URL);
await page.getByPlaceholder("you@email.com").fill("rahulpatil8752@gmail.com");
await page.getByLabel("Password").fill("R@hul8752");
await page.locator("#login-btn").click();
console.log(await page.title());

//await page.goto("https://eventhub.rahulshettyacademy.com/admin/events");
await page.getByRole('button', { name: 'Admin' }).click();
await page.getByRole('navigation').getByRole('link', { name: 'Manage Events' }).click();
const eventTitle = "Test Event " + Date.now();
await page.locator("#event-title-input").fill(eventTitle);
await page.getByPlaceholder("Describe the event…").fill("This is an event to do the booking and vefify weather there is reduction in seats availability");
await page.locator("#city").fill("Banglore");
await page.getByLabel("Venue").fill("Taj Hotel");
await page.getByLabel('Event Date & Time').fill('2027-12-31T10:00');
await page.getByLabel("Price").fill("100");
await page.getByLabel('Total Seats').fill('50');
await page.locator("#add-event-btn").click();

await expect(page.getByText('Event created!')).toBeVisible();

await page.goto("https://eventhub.rahulshettyacademy.com/events");

const eventCards=await page.locator("#event-card");
await expect(eventCards.first()).toBeVisible();

const targetCard = eventCards.filter({ hasText: eventTitle  }).first();
const seatsBeforeBooking = parseInt(await targetCard.getByText('seat').first().innerText());
//console.log(`Seats before booking: ${seatsBeforeBooking}`);
console.log("Seats before booking: " + seatsBeforeBooking);

await targetCard.getByTestId('book-now-btn').click();

const ticketCount=await page.locator("#ticket-count");
await expect(ticketCount).toHaveText("1");

await page.getByLabel("Full Name").fill("Rahul Patil");
await page.locator("#customer-email").fill("rahulpatil8752@gmail.com");
await page.getByPlaceholder("+91 98765 43210").fill("8975573933");
await page.getByRole('button',{name:"Confirm Booking"}).click();

const bookingRefEl = page.locator('.booking-ref').first();
await expect(bookingRefEl).toBeVisible();

const bookingRef = (await bookingRefEl.innerText()).trim();
//expect(bookingRef.charAt(0)).toBe(eventTitle.trim().charAt(0).toUpperCase());
console.log("Booking confirmed. Ref: " + bookingRef);

await page.getByRole('link',{name:'View My Bookings'}).click();
await expect(page).toHaveURL(BASE_URL + "/bookings");

const bookingCards = page.locator('#booking-card');
await expect(bookingCards.first()).toBeVisible();

const matchingCard = bookingCards.filter({ has: page.locator('.booking-ref', { hasText: bookingRef }) });
await expect(matchingCard).toBeVisible();
await expect(matchingCard).toContainText(eventTitle);
console.log("Booking card found in My Bookings for ref: " + bookingRef);

await page.goto("https://eventhub.rahulshettyacademy.com/events");

await expect(eventCards.first()).toBeVisible();

const updatedCard = eventCards.filter({ hasText: eventTitle }).first();
await expect(updatedCard).toBeVisible();

const seatsAfterBooking = parseInt(await updatedCard.getByText('seat').first().innerText());
console.log("Seats after booking: " +  seatsAfterBooking);

expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);
//await page.pause();


});