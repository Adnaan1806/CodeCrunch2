import { test, expect } from '@playwright/test';

test('Visual comparison for Mobile App page', async ({ page }) => {
    await page.goto('https://bisteccare.lk/');

    await page.getByRole('link', { name: 'Products ▼' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Mobile App' }).click();

    await expect(page.getByText('BISTEC Care on the go! You')).toHaveScreenshot("heading58.png");


    await page.waitForTimeout(3000);

  });