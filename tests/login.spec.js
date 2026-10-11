const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

const USER = 'tomsmith';
const PASSWORD = 'SuperSecretPassword!';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
});

test('login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(USER, PASSWORD);

  await expect(page).toHaveURL(/\/secure/);
  await expect(loginPage.message).toContainText('You logged into a secure area!');
});

test('login with invalid username', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login('wrong-user', PASSWORD);

  await expect(page).toHaveURL(/\/login/);
  await expect(loginPage.message).toContainText('Your username is invalid!');
});

test('login with invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(USER, 'wrong-password');

  await expect(page).toHaveURL(/\/login/);
  await expect(loginPage.message).toContainText('Your password is invalid!');
});
