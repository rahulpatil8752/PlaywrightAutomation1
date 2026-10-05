class DashboardPage1
{
constructor(page)
{
    this.page = page;
    this.title=page.locator("#event-title-input");
    this.description=page.getByPlaceholder("Describe the event…");
    this.city=page.locator("#city");
    this.venue=page.getByLabel("Venue");
    this.datetime=page.getByLabel('Event Date & Time');
    this.price=page.getByLabel("Price");
    this.totalseats=page.getByLabel('Total Seats');
    this.eventAdd=page.locator("#add-event-btn");
   
}

async getEventsPage()
{
    await this.page.goto("https://eventhub.rahulshettyacademy.com/admin/events");
}

async fillForm(eventTitle)
{

//console.log(eventTitle);
await this.title.fill(eventTitle);
await this.description.fill("This is an event to do the booking and vefify weather there is reduction in seats availability");
await this.city.fill("Banglore");
await this.venue.fill("Taj Hotel");
await this.datetime.fill('2027-12-31T10:00');
await this.price.fill("100");
await this.totalseats.fill('50');
await this.eventAdd.click();

}

}
module.exports = {DashboardPage1};