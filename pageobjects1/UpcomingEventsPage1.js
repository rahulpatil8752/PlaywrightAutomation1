class UpcomingEventsPage1 {

constructor(page)
{
    this.page = page;
    

}

 async toEvents()
 {
     await this.page.goto("https://eventhub.rahulshettyacademy.com/events");
 }

 async seatBook(eventTitle)

 {  const eventCards=await this.page.locator("#event-card");
    
    const targetCard = eventCards.filter({ hasText: eventTitle  }).first();
    const seatsBeforeBooking = parseInt(await targetCard.getByText('seat').first().innerText());
//console.log(`Seats before booking: ${seatsBeforeBooking}`);
    console.log("Seats before booking: " + seatsBeforeBooking);

    await targetCard.getByTestId('book-now-btn').click();
 }


}
module.exports = {UpcomingEventsPage1};