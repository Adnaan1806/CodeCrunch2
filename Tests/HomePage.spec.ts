import { test, expect } from '@playwright/test';

test.describe('Home Page Navigation Tests', () => {
  
  test('Verify if user is directed to Home page when the link is clicked ', async ({ page }) => {
    await page.goto('https://bisteccare.lk/');
  
    await expect(page.getByRole('heading', { name: 'The only software you need' })).toBeVisible();
  });
  
  test('Verify Home Page Navigation', async ({ page }) => {
  
    await page.goto('https://bisteccare.lk/');
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page.getByRole('heading', { name: 'The only software you need' })).toBeVisible();
  });  

  test('Verify User is navigated to Features page when Explore for medical practice link is clicked', async ({ page }) => {
  
    await page.goto('https://bisteccare.lk/');
    await page.locator('span').filter({ hasText: 'For Medical Practice Explore →' }).getByRole('link').click();
    await expect(page.getByText('Features - For Clinics and Doctors')).toBeVisible();
  }); 

  test('Verify User is navigated to Features page when Explore for patient link is clicked', async ({ page }) => {
  
    await page.goto('https://bisteccare.lk/');
    await page.locator('span').filter({ hasText: 'For Patients Explore →' }).getByRole('link').click();
    await expect(page.getByText('Features - For Patients')).toBeVisible();
  }); 
   
  });
