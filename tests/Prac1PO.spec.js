 const {test, expect} = require('@playwright/test');
 const {POManager1} = require('../pageobjects1/POManager1');


test('create event via UI, book it, and verify seat reduction', async({page}) => {

    const poManager1 = new POManager1(page);
    
      const username = "rahulpatil8752@gmail.com";
      const password = "R@hul8752"
    

     const loginPage1 = poManager1.getLoginPage1();
     await loginPage1.goTo();
     await loginPage1.validLogin(username,password);
     

      const dashboardPage1 = poManager1.getDashboardPage1();
      await dashboardPage1.getEventsPage();

      const eventTitle = "Test Event " + Date.now();
      await dashboardPage1.fillForm(eventTitle);
      await expect(page.getByText('Event created!')).toBeVisible();

       const events=poManager1.getEvents();
       await events.toEvents();

       await events.seatBook(eventTitle);

        const cnfbookings=poManager1.getBookings();
        await cnfbookings.toDobookings();
        
        const bookingRefEl = page.locator('.booking-ref').first();
        await expect(bookingRefEl).toBeVisible();


     
}
   

);