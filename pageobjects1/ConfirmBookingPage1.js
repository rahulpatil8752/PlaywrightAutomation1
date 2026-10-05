class ConfirmBookingPage1
{
constructor(page)
{
    this.page = page;
   // this.tc=page.locator("#ticket-count");
    this.name=page.getByLabel("Full Name");
    this.email= page.locator("#customer-email");
    this.phone=page.getByPlaceholder("+91 98765 43210");
    this.confirmBut=page.getByRole('button',{name:"Confirm Booking"});
}

async toDobookings()
{
//await expect(this.tc).toHaveText("1");
await this.name.fill("Rahul Patil");
await this.email.fill("rahulpatil8752@gmail.com");
await this.phone.fill('8975573933');
await this.confirmBut.click();
}

}
module.exports = {ConfirmBookingPage1};