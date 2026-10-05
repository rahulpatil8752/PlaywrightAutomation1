const {test,expect} = require('@playwright/test')

test('TC_001-QA Playground Demo Practice', async({page})=>
{

  await page.goto('https://qaplayground.com/bank');
  await expect(page.locator('#app-title')).toHaveText('SecureBank Demo');
  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('admin123');
  await page.locator('[data-testid="login-button"]').click();

  //DashboardPage
  await page.locator('#add-account-link').click();

  //Account creation
  await page.locator('#account-name').fill('Rahul Patil');
  await page.locator('#account-type').click();
 // await selectOption('Checking Account');
 await page.getByRole('option', { name: 'Checking' }).click();
  await page.locator('#initial-balance').fill('5000');
  await page.getByTestId('status-active-radio').click();
  await page.locator('#save-account-btn').click();

  //Accounts
  await expect(page.getByTestId('nav-accounts')).toContainText('💳 Accounts');
 // await page.getByTestId('accounts-tbody').filter({hasText:'Rahul Patil'}).getByText('Active').isVisible();
  
const row = page.getByRole('row').filter({ hasText: 'Rahul Patil' });
await expect(row.getByText('Active')).toBeVisible();

//New Transactions
await page.goto('https://qaplayground.com/bank/dashboard');
await page.locator('#new-transaction-link').click();
// const trancType= await page.locator('#transaction-type');
// await trancType.selectOption('transfer');

// Open dropdown
await page.locator('#transaction-type').click();
// Select option
await page.getByRole('option', { name: 'Transfer' }).click();

await page.locator('#from-account').click();
await page.getByRole('option', {name:'Primary Savings - $5,000.00'}).click();

// From Account - open + select
// await page.locator('#from-account').click();
// await page.getByRole('option', { name: 'Primary Savings - $5,000.00' }).click();


await page.locator('#transaction-amount').fill('1000');

await page.locator('#to-account').click();
await page.getByRole('option', {name:'Checking Account (1001234568)'}).click();

await page.locator('#transaction-amount').fill('1000');
await page.locator('#transaction-description').fill('Transfer of Money');
await page.locator('#submit-transaction-btn').click();






  await page.pause();

})

 