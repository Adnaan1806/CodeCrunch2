import { test, expect } from '@playwright/test';

test('Visual comparison for blog page', async ({ page }) => {
    await page.goto('https://bisteccare.lk/');

    await page.getByRole('link', { name: 'Resources ▼' }).click();
    await page.getByRole('link', { name: 'Blog' }).click();

    await expect(page.locator('#iuwx97')).toHaveScreenshot("heading27.png");
    await expect(page.locator('.xrm-attribute-value > div:nth-child(2)')).toHaveScreenshot("heading28.png");
    await expect(page.locator('#FC').first()).toHaveScreenshot("heading29.png");
    await expect(page.locator('#FC').nth(1)).toHaveScreenshot("heading30.png");

    await page.waitForTimeout(5000);

  });