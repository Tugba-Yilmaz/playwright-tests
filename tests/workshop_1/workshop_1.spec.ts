import { test } from '@playwright/test';

test('Basic Navigation', async ({ page }) => {
  await page.goto('https://gitlab.com');
  await page.waitForTimeout(3000);
  await page.reload();
});



test('Interacting with Web Element on Gitlab', async ({ page }) => {
  await page.goto('https://gitlab.com');

  // Accept cookies
  await page.waitForSelector('#onetrust-accept-btn-handler', { timeout: 5000 });
  await page.click('#onetrust-accept-btn-handler');
  await page.getByRole('link', { name: 'Get free trial' }).first().click();
  //await page.locator('[data-testid ="new-user-first-name-field"]').fill('John1');
  //await page.locator('[data-testid ="new-user-last-name-field"]').fill('Snow1');
  await page.getByTestId('new-user-first-name-field').fill('John1');
  await page.getByTestId('new-user-last-name-field').fill('Shon1');
  
});

test('Using Various Locator Methods', async ({ page }) => {
  await page.goto('https://gitlab.com/');
  await page.click('#onetrust-accept-btn-handler'); // cookie btn click
  //await page.getByRole('button', { name: 'Main Menu' }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();

 
});



