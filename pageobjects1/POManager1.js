const { DashboardPage1 } = require('./DashboardPage1');
const { LoginPage1 } = require('./LoginPage1');
const {UpcomingEventsPage1} = require('./UpcomingEventsPage1');
const {ConfirmBookingPage1} = require('./ConfirmBookingPage1')

class POManager1
{
constructor(page)
{
    this.page = page;
    this.loginPage1 = new LoginPage1(this.page); 
    this.dashboardPage1= new DashboardPage1(this.page); 
    this.eventspage1= new UpcomingEventsPage1(this.page);
    this.confbookingpage1 =new ConfirmBookingPage1(this.page)
    
}

getLoginPage1()
{
    return this.loginPage1;
}

getDashboardPage1()
{
    return this.dashboardPage1;
}

getEvents()
{
    return this.eventspage1;
}

getBookings()
{
    return this.confbookingpage1;
}
}
module.exports = {POManager1};