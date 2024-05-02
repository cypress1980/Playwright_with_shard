// @ts-check
const { test, expect } = require('@playwright/test');

test('Test 1 has title', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page).toHaveTitle(/Your Store/);
});
test('Test 2 get started link', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page).toHaveTitle(/Your Store/);
});
test('Test 3 get started link', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page).toHaveTitle(/Your Store/);
});
test('Test 4 get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('Test 5 get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});