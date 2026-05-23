import { test, expect } from '@playwright/test';

test.describe('Landing Page Smoke Tests', () => {
  test('verifies key sections and content', async ({ page }) => {
    // Navigate to the local server
    await page.goto('http://localhost:3000');

    // 1. Verify page title
    await expect(page).toHaveTitle("Green Rabbit — Smart Stock Market App");

    // 2. Verify hero headline is visible
    const heroHeadline = page.getByRole('heading', { name: /Real-time Prices/i });
    await expect(heroHeadline).toBeVisible();

    // 3. Verify ticker strip is visible
    const tickerSection = page.locator('section').filter({ hasText: /AAPL|TSLA|NVDA/ }).first();
    await expect(tickerSection).toBeVisible();

    // 4. Verify bento grid section is visible (AI Premium Features)
    const bentoSection = page.getByRole('heading', { name: "AI-Powered Premium" });
    await expect(bentoSection).toBeVisible();

    // 5. Verify pricing section has 2 cards
    const pricingSection = page.locator('#pricing');
    await expect(pricingSection).toBeVisible();
    
    // There are two "Get Premium" / "Get Started" buttons in the pricing section
    const pricingCards = pricingSection.locator('button', { hasText: /Get Premium|Get Started/ });
    await expect(pricingCards).toHaveCount(2);
  });
});
