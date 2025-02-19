import { test, expect } from '@playwright/test';

test('Visual comparison for About us page', async ({ page }) => {
    await page.goto('https://bisteccare.lk/');

    await page.getByRole('link', { name: 'Resources ▼' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'About Us' }).click();

    await expect(page.locator('.row').first()).toHaveScreenshot("heading18.png");
    await expect(page.locator('.xrm-attribute-value > div:nth-child(2)')).toHaveScreenshot("heading19.png");
    await expect(page.locator('#FC').first()).toHaveScreenshot("heading20.png");

    await page.waitForTimeout(3000);

  });