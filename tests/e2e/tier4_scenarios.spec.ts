import { test, expect } from '@playwright/test';

test.describe('Tier 4: Real-World Visitor Walkthrough Scenarios', () => {
  test('test 1: Recruiter walkthrough', async ({ page }) => {
    // 1. Recruiter arrives on the homepage
    await page.goto('/');
    
    // 2. Inspects JSON contact block
    const contactSection = page.locator('[data-testid="contact-json"], pre').first();
    await expect(contactSection).toBeVisible();
    await expect(contactSection).toContainText('Roblox');
    await expect(contactSection).toContainText('GitHub');

    // 3. Verifies Roblox link structure and attribute
    const robloxLink = page.locator('a[href*="roblox.com"]').first();
    await expect(robloxLink).toBeVisible();
    expect(await robloxLink.getAttribute('target')).toBe('_blank');

    // 4. Click a project card to check full details
    const card = page.locator('[data-testid="project-card"]').first();
    await card.click();
    await page.waitForURL(/\/projects\/.+/);

    // 5. Verify the details page content loads correctly
    const title = page.locator('[data-testid="project-title"], h1').first();
    const desc = page.locator('[data-testid="project-description"]').first();
    await expect(title).toBeVisible();
    await expect(desc).toBeVisible();

    // 6. Navigate back to home
    const backButton = page.locator('[data-testid="back-button"]').first();
    await backButton.click();
    await page.waitForURL(/\/$/);
  });

  test('test 2: Developer walkthrough', async ({ page }) => {
    // 1. Developer arrives on home page
    await page.goto('/');

    // 2. Inspect IDE navbar keywords
    const keywords = ['export', 'import', 'function', 'local'];
    for (const kw of keywords) {
      const locator = page.locator(`[data-testid="keyword-${kw}"], nav >> text="${kw}"`).first();
      await expect(locator).toBeVisible();
      await locator.hover();
      
      // Clicking the keyword does not navigate/change url
      const urlBefore = page.url();
      await locator.click({ force: true });
      expect(page.url()).toBe(urlBefore);
    }

    // 3. Inspect skills grid cards & icons
    const skillsGrid = page.locator('[data-testid="skills-grid"]').first();
    await expect(skillsGrid).toBeVisible();
    
    const skillCard = page.locator('[data-testid^="skill-card-"], [data-testid="skill-card"]').first();
    await expect(skillCard).toBeVisible();
    await skillCard.hover();

    const icon = skillCard.locator('svg, img').first();
    await expect(icon).toBeVisible();
  });

  test('test 3: Client review walkthrough', async ({ page }) => {
    // 1. Arrive on home page
    await page.goto('/');

    // 2. Verify reviews grid exists
    const grid = page.locator('[data-testid="reviews-grid"]').first();
    await expect(grid).toBeVisible();

    // 3. Verify exact text for Studio Lead review
    const studioLeadText = `"Very professional. The custom Luau VM integration was exactly what our engine needed. Clean code, well documented. 5/5" - Studio Lead (NDA)`;
    const studioLeadCard = page.locator(`[data-testid="review-card-studiolead"], [data-testid="review-card"]:has-text("Studio Lead")`).first();
    await expect(studioLeadCard).toBeVisible();
    await expect(studioLeadCard).toContainText(studioLeadText);

    // 4. Verify other reviews exist
    const otherReview = page.locator(`[data-testid="review-card-voidwalker"], [data-testid="review-card"]:has-text("VoidWalker")`).first();
    await expect(otherReview).toBeVisible();

    // 5. Clicks project card to verify challenges & solutions
    const card = page.locator('[data-testid="project-card"]').first();
    await card.click();
    await page.waitForURL(/\/projects\/.+/);
    
    const challenges = page.locator('[data-testid="project-challenges"]').first();
    const solutions = page.locator('[data-testid="project-solutions"]').first();
    await expect(challenges).toBeVisible();
    await expect(solutions).toBeVisible();
  });

  test('test 4: Responsive stress-test', async ({ page }) => {
    // 1. Start on Desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    // 2. Click project details
    const card = page.locator('[data-testid="project-card"]').first();
    await card.click();
    await page.waitForURL(/\/projects\/.+/);

    // 3. Resize to Mobile on details page
    await page.setViewportSize({ width: 320, height: 568 });
    const title = page.locator('[data-testid="project-title"], h1').first();
    await expect(title).toBeVisible();

    // 4. Click back button on mobile
    const backButton = page.locator('[data-testid="back-button"]').first();
    await backButton.click();
    await page.waitForURL(/\/$/);

    // 5. Verify home page layout at mobile width
    const projectsGrid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
    await expect(projectsGrid).toBeVisible();
    const box = await projectsGrid.boundingBox();
    expect(box?.width).toBeLessThanOrEqual(330);

    // 6. Resize back to Desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(projectsGrid).toBeVisible();
  });

  test('test 5: Navigation cycle consistency', async ({ page }) => {
    // 1. Arrive on homepage
    await page.goto('/');

    // 2. Click all nav tabs sequentially
    const links = ['about', 'skills', 'projects', 'reviews', 'contact'];
    for (const text of links) {
      const link = page.locator(`[data-testid="nav-link-${text}"], nav a[href*="${text}"]`).first();
      if (await link.isVisible()) {
        await link.click();
      }
    }

    // 3. Deep reload home page
    await page.reload();
    await expect(page.locator('[data-testid="project-card"]').first()).toBeVisible();

    // 4. Click project details
    await page.locator('[data-testid="project-card"]').first().click();
    await page.waitForURL(/\/projects\/.+/);

    // 5. Deep reload details page
    await page.reload();
    const title = page.locator('[data-testid="project-title"], h1').first();
    await expect(title).toBeVisible();

    // 6. Return back to homepage
    const backButton = page.locator('[data-testid="back-button"]').first();
    await backButton.click();
    await page.waitForURL(/\/$/);
  });
});
