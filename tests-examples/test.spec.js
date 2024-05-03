import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('lambdatestnew@yopmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('Lambda123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit Account' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Lambda1');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('#account-account')).toContainText('Success: Your account has been successfully updated.');
  await page.getByRole('link', { name: ' Password' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});