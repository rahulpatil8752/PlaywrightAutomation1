import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  await expect(page.getByRole('navigation')).toContainText('ProtoCommerce');
  await page.locator('form input[name="name"]').fill("Rahul");
  await page.locator('input[name="email"]').fill("rahulpatil");
  await page.getByRole('textbox', { name: 'Password' }).fill("R@hul");
  await page.getByRole('checkbox', { name: 'Check me out if you Love' }).check();
  await expect(page.getByText('Check me out if you Love')).toBeVisible();
  await page.getByLabel('Gender').selectOption('Female');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('form-comp')).toContainText('× Success! The Form has been submitted successfully!.');
  await page.getByRole('link', { name: 'Shop' }).click();
  await page.getByRole('link', { name: 'Samsung Note' }).click();
});