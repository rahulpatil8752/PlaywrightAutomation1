class LoginPage1 {

constructor(page)
{
    this.page = page;
    this.signInbutton= page.locator("#login-btn");
    this.userName = page.locator("#email");
    this.password = page.locator("#password");

}

async goTo()
{
    await this.page.goto("https://eventhub.rahulshettyacademy.com");
}

async validLogin(username,password)
{
    await  this.userName.type(username);
     await this.password.type(password);
     await this.signInbutton.click();
     await this.page.waitForLoadState('networkidle');
     console.log(await this.page.title());

}

}
module.exports = {LoginPage1};