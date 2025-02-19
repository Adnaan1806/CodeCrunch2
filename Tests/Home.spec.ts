import { test, expect } from '@playwright/test';


  test('Visual comparison for Home page', async ({ page }) => {
    await page.goto('https://bisteccare.lk/');

    await expect(page).toHaveScreenshot('homepage.png');

    await expect(page.getByRole('heading', { name: 'The only software you need' })).toHaveScreenshot("mainheading.png");

    await expect(page.getByRole('heading', { name: 'What is Bistec Care?' })).toHaveScreenshot("heading1.png");

    await expect(page.getByRole('heading', { name: 'Why Bistec Care?' })).toHaveScreenshot("heading2.png");

    await expect(page.getByText('Our Features')).toHaveScreenshot("heading3.png");

    await expect(page.getByText('For Medical Practice')).toHaveScreenshot("heading4.png");

    await expect(page.locator('div:nth-child(6) > .container > .col-md-12')).toHaveScreenshot("heading5.png");

    await expect(page.getByText('For Patients')).toHaveScreenshot("heading6.png");

    await expect(page.locator('div:nth-child(7) > .container > .col-md-12')).toHaveScreenshot("heading7.png");

    await expect(page.getByRole('heading', { name: 'About Us' })).toHaveScreenshot("heading8.png");

    await expect(page.getByRole('button', { name: 'Learn more' })).toHaveScreenshot("heading9.png");

    await expect(page.locator('.xrm-attribute-value > div:nth-child(9)')).toHaveScreenshot("heading10.png");
    await expect(page.locator('.xrm-attribute-value > div:nth-child(10)')).toHaveScreenshot("heading11.png");
    await expect(page.locator('.xrm-attribute-value > div:nth-child(11)')).toHaveScreenshot("heading12.png");
    await expect(page.locator('.xrm-attribute-value > div:nth-child(12)')).toHaveScreenshot("heading13.png");
    await expect(page.locator('#mainContent div').filter({ hasText: 'Sakuki Dental Hospital Dental' }).nth(3)).toHaveScreenshot("heading14.png");

    await expect(page.locator('#mainContent div').filter({ hasText: 'The Evian Beauty Clinic Lavish Skin Clinic Dr. Diana\'s Dental Clinic' }).nth(3)).toHaveScreenshot("heading15.png");

    await expect(page.locator('.xrm-attribute-value')).toHaveScreenshot("heading16.png");

    await expect(page.locator('#FC').first()).toHaveScreenshot("heading17.png");


    await page.waitForTimeout(3000);

  });
