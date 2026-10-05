class A_LoginPage2 {

constructor(page)
{
    this.page = page;
    this.loginbutton= page.locator("#login-button");
    this.userName = page.locator('#user-name');
    this.password = page.locator("#password");
}

async goTo()
{
    await this.page.goto("https://www.saucedemo.com/");
}

async validLogin(username,password)
{
     await  this.userName.type(username);
     await this.password.type(password);
     await this.loginbutton.click();
     await this.page.waitForLoadState('networkidle');
     console.log(await this.page.title());

}

}
module.exports = {A_LoginPage2};