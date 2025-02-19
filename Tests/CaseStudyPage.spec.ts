import { test, expect } from '@playwright/test';

test('Visual comparison for News page', async ({ page }) => {
    await page.goto('https://bisteccare.lk/');

    await page.getByRole('link', { name: 'Resources ▼' }).click();
    await page.getByRole('link', { name: 'Case Studies' }).click();

    await expect(page.locator('.row').first()).toHaveScreenshot("heading34.png");
    await expect(page.locator('#FC').first()).toHaveScreenshot("heading35.png");


    await page.waitForTimeout(3000);

  });