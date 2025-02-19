import { test, expect } from '@playwright/test';

test('Visual comparison for Web App page', async ({ page }) => {
    await page.goto('https://bisteccare.lk/');

    await page.getByRole('link', { name: 'Products ▼' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Web App' }).click();

    await expect(page.locator('#ievxfj')).toHaveScreenshot("heading36.png");
    await expect(page.locator('#isb8tp')).toHaveScreenshot("heading37.png");
    await expect(page.locator('#ii464f')).toHaveScreenshot("heading38.png");
    await expect(page.locator('#iofdjd')).toHaveScreenshot("heading39.png");
    await expect(page.locator('.xrm-attribute-value > div:nth-child(5)')).toHaveScreenshot("heading40.png");
    await expect(page.locator('#idreuz')).toHaveScreenshot("heading41.png");
    await expect(page.locator('#irldpa')).toHaveScreenshot("heading42.png");
    await expect(page.locator('.xrm-attribute-value > div:nth-child(8)')).toHaveScreenshot("heading43.png");
    await expect(page.locator('div:nth-child(9)').first()).toHaveScreenshot("heading44.png");
    await expect(page.locator('div:nth-child(10)')).toHaveScreenshot("heading45.png");
    await expect(page.locator('div:nth-child(11)')).toHaveScreenshot("heading46.png");
    await expect(page.locator('div:nth-child(12)')).toHaveScreenshot("heading47.png");
    await expect(page.locator('#im549n')).toHaveScreenshot("heading48.png");
    await expect(page.locator('div:nth-child(14)')).toHaveScreenshot("heading49.png");
    await expect(page.locator('div:nth-child(15)')).toHaveScreenshot("heading50.png");
    await expect(page.locator('#ike1eq')).toHaveScreenshot("heading51.png");
    await expect(page.locator('#irwsri')).toHaveScreenshot("heading52.png");
    await expect(page.locator('#i4tfr3')).toHaveScreenshot("heading53.png");
    await expect(page.locator('#ij7hr2')).toHaveScreenshot("heading54.png");
    await expect(page.locator('#ilx7pm')).toHaveScreenshot("heading55.png");
    await expect(page.locator('#ihgoaz')).toHaveScreenshot("heading56.png");
    await expect(page.locator('#FC').first()).toHaveScreenshot("heading57.png");

    await page.waitForTimeout(6000);

  });