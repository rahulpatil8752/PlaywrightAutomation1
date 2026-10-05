import { test, expect } from '@playwright/test';



test.only('create event via UI, book it, and verify seat reduction', async({page}) => {

const BASE_URL = 'https://eventhub.rahulshettyacademy.com'

//Step 1
await page.goto(BASE_URL+"/login");
await page.getByLabel("Email").fill("rahulpatil8752@gmail.com");
await page.locator("#password").fill("R@hul8752");
await page.getByRole('button',{name:'Sign In'}).click();
await expect(page.getByRole('link', {name:'Browse Events →'})).toBeVisible();
await console.log(page.title);

//Step 2
await page.goto(BASE_URL+"/admin/events");
const eventTitle = "Test Event"+ Date.now();
await page.locator("#event-title-input").fill(eventTitle);
await page.getByPlaceholder("Describe the event…").fill("I am describing the event");
await page.locator("#city").fill("Solapur");
await page.locator("#venue").fill("Hote City Park");
await page.getByLabel("Event Date & Time").fill("2027-12-31T10:00");
await page.getByLabel("Price ($)").fill("500");
await page.locator("#total-seats").fill("500");
await page.getByRole('button',{name:'+ Add Event'}).click();
await expect(page.getByText('Event created!')).toBeVisible();

//Step 3
await page.goto(BASE_URL+"/events");
const eventCards = await page.locator("#event-card");
await expect(eventCards.first()).toBeVisible();
const targetCard= eventCards.filter({hasText:eventTitle}).first();
const seatsBeforeBooking = parseInt(await targetCard.getByText('seat').first().innerText());
console.log("Seats before booking: " + seatsBeforeBooking);

//Step 4

await targetCard.getByTestId('book-now-btn').click();

//Step 5

const ticketCount=await page.locator("#ticket-count");
await expect(ticketCount).toHaveText("1");

await page.locator("#customerName").fill("Sakshi Patil");
await page.getByLabel('Email').fill("rahulpatil8752@gmail.com");
await page.locator('#phone').fill('8975573933');
await page.getByRole('button',{name:'Confirm Booking'}).click();


//Step 6
const bookingRef1=await page.locator(".booking-ref").first();
await expect(bookingRef1).toBeVisible();

console.log("Booking confirmed. Ref: " + bookingRef1);

await page.getByRole('button', {name:'View My Bookings'}).click();

await expect(page).toHaveURL(BASE_URL+"/bookings");
const allBookingCards= page.locator("#booking-card");
await allBookingCards.first().isVisible();

const matchCard= await allBookingCards.filter({hasText:'bookingRef1'});
await expect(matchCard).toBeVisible();





await page.pause();






});