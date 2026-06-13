import { test, expect } from '@playwright/test';

test.describe('Tier 3: Pairwise Combinations', () => {
  test('test 1: project details navigation while animations are active', async ({ page }) => {
    await page.goto('/');
    const card = page.locator('[data-testid="project-card"]').first();
    await card.hover();
    // Click immediately during hover state
    await card.click();
    await page.waitForURL(/\/projects\/.+/);
    expect(page.url()).toContain('/projects/');
  });

  test('test 2: responsive grid resizing triggers column adjustments on projects and skills grids simultaneously', async ({ page }) => {
    await page.goto('/');
    const projectsGrid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
    const skillsGrid = page.locator('[data-testid="skills-grid"]').first();
    
    // Set to desktop layout
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(projectsGrid).toBeVisible();
    await expect(skillsGrid).toBeVisible();
    
    const desktopProjectsBox = await projectsGrid.boundingBox();
    const desktopSkillsBox = await skillsGrid.boundingBox();
    
    // Set to mobile layout
    await page.setViewportSize({ width: 320, height: 568 });
    const mobileProjectsBox = await projectsGrid.boundingBox();
    const mobileSkillsBox = await skillsGrid.boundingBox();
    
    expect(mobileProjectsBox?.width).toBeLessThan(desktopProjectsBox?.width || 1200);
    expect(mobileSkillsBox?.width).toBeLessThan(desktopSkillsBox?.width || 1200);
  });

  test('test 3: navigating to nav tab from details subpage routes back and focuses', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-testid="project-card"]').first().click();
    await page.waitForURL(/\/projects\/.+/);
    
    // Click reviews link in header navigation
    const reviewsLink = page.locator('[data-testid="nav-link-reviews"], nav a[href*="reviews"]').first();
    await reviewsLink.click();
    
    // Should navigate back to homepage with hash or scroll target
    await page.waitForURL(/\/.*(#reviews|#|$)/);
    const reviewsGrid = page.locator('[data-testid="reviews-grid"]').first();
    await expect(reviewsGrid).toBeVisible();
  });

  test('test 4: JSON contact section visibility and position checks', async ({ page }) => {
    await page.goto('/');
    const projectsGrid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
    const contactSection = page.locator('[data-testid="contact-json"], [data-testid="contact-section"], #contact').first();
    
    await expect(projectsGrid).toBeVisible();
    await expect(contactSection).toBeVisible();
    
    const projectsBox = await projectsGrid.boundingBox();
    const contactBox = await contactSection.boundingBox();
    
    // Contact section should be positioned vertically below the projects grid
    expect(contactBox?.y).toBeGreaterThan(projectsBox?.y || 0);
  });

  test('test 5: card hover Luau text does not conflict with nav bar actions', async ({ page }) => {
    await page.goto('/');
    // Hover on a code snippet on card
    const snippet = page.locator('[data-testid="project-snippet"], .font-mono').first();
    if (await snippet.isVisible()) {
      await snippet.hover();
    }
    
    // Click About link in the navbar
    const aboutLink = page.locator('[data-testid="nav-link-about"], nav a[href*="about"]').first();
    await aboutLink.click();
    
    const aboutSection = page.locator('[data-testid="about-section"], #about').first();
    await expect(aboutSection).toBeInViewport();
  });

  test('test 6: responsive header font sizes during description text transitions', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-testid="project-card"]').first().click();
    await page.waitForURL(/\/projects\/.+/);
    
    const title = page.locator('[data-testid="project-title"], h1').first();
    
    // Change size during display
    await page.setViewportSize({ width: 1200, height: 800 });
    const desktopSize = await title.evaluate(el => window.getComputedStyle(el).fontSize);
    
    await page.setViewportSize({ width: 320, height: 568 });
    const mobileSize = await title.evaluate(el => window.getComputedStyle(el).fontSize);
    
    // Font size should adapt (mobile is usually smaller)
    const desktopPx = parseFloat(desktopSize);
    const mobilePx = parseFloat(mobileSize);
    expect(mobilePx).toBeLessThanOrEqual(desktopPx);
  });
});
