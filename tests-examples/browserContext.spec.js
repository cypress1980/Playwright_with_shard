import { test } from "@playwright/test";
test("Browser Context example", async ({ browser }) => {
  
  //First Context - Open Page in New Browser
  const firstContext = await browser.newContext();
  const firstPage = await firstContext.newPage();
  await firstPage.goto("https://automationexercise.com/login");
  await firstPage.locator('input[data-qa="login-email"]').click();
  await firstPage.locator('input[data-qa="login-email"]').fill("ncrmeet1@yopmail.com");
  await firstPage.locator('input[data-qa="login-email"]').press("Tab");
  await firstPage.locator('input[placeholder="Password"]').fill("Test@1234");
  await firstPage.locator('button[data-qa="login-button"]').click();

  //Second Context --  Open Page in New Browser --1
  const secondContext = await browser.newContext();
  const secondPage = await secondContext.newPage();
  await secondPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  await secondPage.locator('//input[@id="input-email"]').fill('lambdatestnew@yopmail.com')
  await secondPage.locator('//input[@id="input-email"]').press("Tab");
  await secondPage.locator('//input[@id="input-password"]').fill("Lambda123");
  await secondPage.locator('//input[@value="Login"]').click();

  //Third Context --  Open Page in New Browser
  const thirdContext = await browser.newContext();
  const thirdPage = await thirdContext.newPage();
  await thirdPage.goto("https://automationexercise.com/login");
  await thirdPage.locator('input[data-qa="login-email"]').click();
  await thirdPage.locator('input[data-qa="login-email"]').fill("ncrmeet2@yopmail.com");
  await thirdPage.locator('input[data-qa="login-email"]').press("Tab");
  await thirdPage.locator('input[placeholder="Password"]').fill("Test@1234");
  await thirdPage.locator('button[data-qa="login-button"]').click();
  firstPage.bringToFront();
  await firstPage.locator('//a[@href="/products"]').click();

  await firstPage.pause();
  await secondPage.pause();
  await thirdPage.pause();

  /* //Closed Page/ Context
    await firstPage.close();
    await secondPage.close();

    await firstContext.close();
    await secondContext.close();*/
});