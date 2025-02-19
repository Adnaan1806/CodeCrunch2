import { test, expect } from '@playwright/test';

test.describe('Home Page Navigation Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('https://bisteccare.lk/');
  });

  test('Verify if user is directed to Home page when the link is clicked', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'The only software you need' })).toBeVisible();
  });

  test('Verify Home Page Navigation', async ({ page }) => {
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page.getByRole('heading', { name: 'The only software you need' })).toBeVisible();
  });

  test('Verify What is Bistec Care Heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'What is Bistec Care?' })).toBeVisible();
  });

  test('Verify Why Bistec Care Heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Why Bistec Care?' })).toBeVisible();
  });

  test('Verify Our Features Section', async ({ page }) => {
    await expect(page.getByText('Our Features')).toBeVisible();
  });

  test('Verify For Medical Practice heading under Our Features Section', async ({ page }) => {
    await expect(page.getByText('For Medical Practice')).toBeVisible();
  });

  test('Verify User is navigated to Features page when Explore for medical practice link is clicked', async ({ page }) => {
    await page.locator('span').filter({ hasText: 'For Medical Practice Explore →' }).getByRole('link').click();
    await expect(page.getByText('Features - For Clinics and Doctors')).toBeVisible();
  });

  test('Verify For Patients heading under Our Features Section', async ({ page }) => {
    await expect(page.getByText('For Patients')).toBeVisible();
  });

  test('Verify User is navigated to Features page when Explore for patient link is clicked', async ({ page }) => {
    await page.locator('span').filter({ hasText: 'For Patients Explore →' }).getByRole('link').click();
    await expect(page.getByText('Features - For Patients')).toBeVisible();
  });

  test('Verify About Us heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();
  });

  test('Verify Learn more button under About Us heading', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Learn more' })).toBeVisible();
  });

  // // ✅ Visual Testing - Full Page Screenshot Comparison
  // test('Verify Home Page UI with Visual Comparison', async ({ page }) => {
  //   await expect(page).toHaveScreenshot();
  // });

  // // ✅ Visual Testing - Specific Element Screenshot
  // test('Verify About Us Section Appearance', async ({ page }) => {
  //   const aboutUsHeading = page.getByRole('heading', { name: 'About Us' });
  //   await expect(aboutUsHeading).toHaveScreenshot();
  // });

});
