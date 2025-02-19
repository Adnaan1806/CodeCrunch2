import { test, expect } from '@playwright/test';

test('Visual comparison for News page', async ({ page }) => {
    await page.goto('https://bisteccare.lk/');

    await page.getByRole('link', { name: 'Resources ▼' }).click();
    await page.getByRole('link', { name: 'News' }).click();

    await expect(page.locator('#iuwx97')).toHaveScreenshot("heading31.png");
    await expect(page.getByText('BISTEC Care Wins Big at SLASSCOM Ingenuity Awards 2024 Read more Presenting')).toHaveScreenshot("heading32.png");
    await expect(page.locator('#FC').first()).toHaveScreenshot("heading33.png");


    await page.waitForTimeout(3000);

  });