import { test, expect } from '@playwright/test';

test('Visual comparison for Who uses bistec care page', async ({ page }) => {
    await page.goto('https://bisteccare.lk/');

    await page.getByRole('link', { name: 'Resources ▼' }).click();
    await page.getByRole('link', { name: 'Who Uses Bistec Care', exact: true }).click();

    await expect(page.locator('.row').first()).toHaveScreenshot("heading21.png");
    await expect(page.locator('.xrm-attribute-value > div:nth-child(2)')).toHaveScreenshot("heading22.png");
    await expect(page.locator('#FC').first()).toHaveScreenshot("heading23.png");

    await page.waitForTimeout(3000);

  });