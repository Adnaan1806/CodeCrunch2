import { test, expect } from '@playwright/test';

test.describe('Web App Page Navigation Tests', () => {

    test('Verify presence of all headings on BISTEC Care Web App page', async ({ page }) => {
      await page.goto('https://bisteccare.lk/web-app/');
    
      // Verify main feature heading
      await expect(page.getByText('Features - For Clinics and')).toBeVisible();
    
      // Verify subheadings
      const headings = [
        'Manage doctors’ schedule',
        'Manage appointments',
        'Record treatment details',
        'Treatment marker',
        'Inventory management',
        'Reports and analytics',
        'AI-Assisted Chatbot',
        'Medication module',
        'Invoice management'
      ];
    
      for (const heading of headings) {
        await expect(page.getByText(heading).first()).toBeVisible();
      }

      await page.screenshot({ path: './Screenshots/webapp.png', fullPage: true });
    });

    test('Verify if user is directed to Mobile App page when the link is clicked ', async ({ page }) => {
        await page.goto('https://bisteccare.lk/mobile-app/');
      
        await expect(page.getByText('BISTEC Care on the go!')).toBeVisible();

        await page.screenshot({ path: './Screenshots/webapp.png', fullPage: true });
      });




});