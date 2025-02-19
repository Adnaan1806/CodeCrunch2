import { test, expect } from '@playwright/test';

test('Visual comparison for Contact us page', async ({ page }) => {
    await page.goto('https://bisteccare.lk/');

    await page.getByRole('link', { name: 'Resources ▼' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Contact Us' }).click();

    await expect(page.locator('.row').first()).toHaveScreenshot("heading24.png");
    await expect(page.locator('.xrm-attribute-value > div:nth-child(2)')).toHaveScreenshot("heading25.png");
    await expect(page.locator('#FC').first()).toHaveScreenshot("heading26.png");

    await page.waitForTimeout(3000);

  });