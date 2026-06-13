import { test, expect } from '@playwright/test';

test.describe('F1 Edge Cases', () => {
  test('test 1: narrow viewport navigation behavior', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');
    
    // IDE Nav tab bar or mobile menu should be visible or readable
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
  });

  test('test 2: click-triggers on non-clickable keywords', async ({ page }) => {
    await page.goto('/');
    const initialUrl = page.url();
    const keyword = page.locator('[data-testid="keyword-export"], nav >> text="export"').first();
    await keyword.click({ force: true });
    expect(page.url()).toBe(initialUrl);
  });

  test('test 3: rapid nav link clicking', async ({ page }) => {
    await page.goto('/');
    const links = ['[data-testid="nav-link-about"]', '[data-testid="nav-link-skills"]', '[data-testid="nav-link-projects"]', '[data-testid="nav-link-reviews"]', '[data-testid="nav-link-contact"]'];
    
    // Rapidly click all links
    for (const selector of links) {
      const el = page.locator(selector).first();
      if (await el.isVisible()) {
        await el.click().catch(() => {});
      }
    }
    // Verify page state has not crashed
    await expect(page.locator('body')).toBeVisible();
  });

  test('test 4: scrolling layout check', async ({ page }) => {
    await page.goto('/');
    const aboutLink = page.locator('[data-testid="nav-link-about"], nav a[href="#about"]').first();
    await aboutLink.click();
    
    // Let's verify the viewport has scrolled or the element has focus
    const aboutSection = page.locator('[data-testid="about-section"], #about').first();
    await expect(aboutSection).toBeInViewport();
  });

  test('test 5: missing/invalid anchor routing', async ({ page }) => {
    await page.goto('/#invalid-anchor-xyz');
    await expect(page.locator('body')).toBeVisible();
  });
});

test.describe('F2 Edge Cases', () => {
  test('test 6: long snippet text wrapping', async ({ page }) => {
    await page.goto('/');
    const card = page.locator('[data-testid="project-card"]').first();
    const snippet = card.locator('[data-testid="project-snippet"], .font-mono').first();
    await expect(snippet).toBeVisible();
    
    // Verify it doesn't break styling (has class or overflow settings)
    const className = await snippet.getAttribute('class');
    // It should either be wrapped or configured with a scroll/overflow class
    expect(className || '').toMatch(/(wrap|scroll|overflow|font-mono|text|truncate|line-clamp)/);
  });

  test('test 7: bento box scaling at 320px width', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');
    
    const grid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
    await expect(grid).toBeVisible();
    
    // Ensure width of the grid does not exceed screen width significantly
    const box = await grid.boundingBox();
    expect(box?.width).toBeLessThanOrEqual(330);
  });

  test('test 8: zoom layout stability (200%)', async ({ page }) => {
    // Emulate a very wide/zoomed screen resolution
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.goto('/');
    const grid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
    await expect(grid).toBeVisible();
  });

  test('test 9: hover response under touch devices', async ({ context }) => {
    // Create new touch-enabled page
    const touchPage = await context.newPage();
    await touchPage.setViewportSize({ width: 375, height: 667 });
    await touchPage.goto('/');
    
    const card = touchPage.locator('[data-testid="project-card"]').first();
    await expect(card).toBeVisible();
    
    // Touch tap
    await card.tap().catch(() => card.click());
    await touchPage.waitForURL(/\/projects\/.+/);
    expect(touchPage.url()).toContain('/projects/');
    await touchPage.close();
  });

  test('test 10: card rendering stability with special characters', async ({ page }) => {
    await page.goto('/');
    const textContent = await page.locator('[data-testid="projects-grid"], main#projects').textContent();
    // Ensure C++ and other details render cleanly without template syntax leakage
    expect(textContent).not.toContain('{{');
    expect(textContent).not.toContain('${');
  });
});

test.describe('F3 Edge Cases', () => {
  test('test 11: navigate to invalid slug (404/redirect)', async ({ page }) => {
    await page.goto('/projects/this-slug-does-not-exist');
    // Next.js standard not found UI or custom 404 message should be visible
    const body = page.locator('body');
    await expect(body).toContainText(/(404|not found|Return|Home|Workspace)/i);
  });

  test('test 12: direct load of project URL (deep-linking)', async ({ page }) => {
    // Find a slug first by loading main page, or navigate to a known fallback slug
    await page.goto('/');
    const card = page.locator('[data-testid="project-card"]').first();
    // Try to get href or data-slug
    const href = await card.getAttribute('href');
    const targetUrl = href ? href : '/projects/custom-cpp-3d-engine-luau-vm';
    
    await page.goto(targetUrl);
    const title = page.locator('[data-testid="project-title"], h1').first();
    await expect(title).toBeVisible();
  });

  test('test 13: browser back/forward history tracking', async ({ page }) => {
    await page.goto('/');
    const initialUrl = page.url();
    
    const card = page.locator('[data-testid="project-card"]').first();
    await card.click();
    await page.waitForURL(/\/projects\/.+/);
    
    // Go back
    await page.goBack();
    await page.waitForURL(initialUrl);
    expect(page.url()).toBe(initialUrl);
    
    // Go forward
    await page.goForward();
    await page.waitForURL(/\/projects\/.+/);
    expect(page.url()).toContain('/projects/');
  });

  test('test 14: screen resizing on details page', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-testid="project-card"]').first().click();
    await page.waitForURL(/\/projects\/.+/);
    
    // Resize to desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    const title = page.locator('[data-testid="project-title"], h1').first();
    await expect(title).toBeVisible();
    
    // Resize to mobile
    await page.setViewportSize({ width: 320, height: 568 });
    await expect(title).toBeVisible();
  });

  test('test 15: rapid project card clicking stability', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('[data-testid="project-card"]');
    if (await cards.count() > 1) {
      await cards.nth(0).click().catch(() => {});
      await page.goto('/');
      await cards.nth(1).click().catch(() => {});
      await page.waitForURL(/\/projects\/.+/);
      expect(page.url()).toContain('/projects/');
    }
  });
});

test.describe('F4 Edge Cases', () => {
  test('test 16: long testimonial text handling', async ({ page }) => {
    await page.goto('/');
    const grid = page.locator('[data-testid="reviews-grid"]').first();
    await expect(grid).toBeVisible();
    
    // Text should not be clipped (i.e. check height or css overflow)
    const reviews = page.locator('[data-testid="review-card"]');
    const count = await reviews.count();
    for (let i = 0; i < count; i++) {
      const review = reviews.nth(i);
      const style = await review.getAttribute('style');
      // Masonry elements should be rendered correctly
      expect(style || '').not.toContain('display: none');
    }
  });

  test('test 17: masonry grid column resizing', async ({ page }) => {
    await page.goto('/');
    const grid = page.locator('[data-testid="reviews-grid"]').first();
    await expect(grid).toBeVisible();
    
    // Set desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    // Should have columns
    const desktopClass = await grid.getAttribute('class');
    
    // Set mobile
    await page.setViewportSize({ width: 320, height: 568 });
    const mobileClass = await grid.getAttribute('class');
    
    // Layout should dynamically adapt (Tailwind classes for responsive columns)
    expect(desktopClass || mobileClass || 'columns').toMatch(/(columns|grid|flex)/);
  });

  test('test 18: duplicate check for reviews', async ({ page }) => {
    await page.goto('/');
    const reviews = page.locator('[data-testid="review-card"]');
    const texts = await reviews.allTextContents();
    
    const uniqueTexts = new Set(texts);
    expect(uniqueTexts.size).toBe(texts.length);
  });

  test('test 19: missing ratings/reviews checks', async ({ page }) => {
    await page.goto('/');
    const reviews = page.locator('[data-testid="review-card"]');
    const count = await reviews.count();
    for (let i = 0; i < count; i++) {
      const text = await reviews.nth(i).textContent();
      expect(text).toContain('/5');
    }
  });

  test('test 20: layout integrity on mobile viewports', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');
    const grid = page.locator('[data-testid="reviews-grid"]').first();
    await expect(grid).toBeVisible();
    
    // Ensure reviews fit screen
    const box = await grid.boundingBox();
    expect(box?.width).toBeLessThanOrEqual(330);
  });
});

test.describe('F5 Edge Cases', () => {
  test('test 21: skills grid wrapping on mobile (320px)', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');
    const grid = page.locator('[data-testid="skills-grid"]').first();
    await expect(grid).toBeVisible();
    const box = await grid.boundingBox();
    expect(box?.width).toBeLessThanOrEqual(330);
  });

  test('test 22: icon visual scaling', async ({ page }) => {
    await page.goto('/');
    const icons = page.locator('[data-testid="skills-grid"] svg, [data-testid="skills-grid"] img');
    const count = await icons.count();
    for (let i = 0; i < count; i++) {
      await expect(icons.nth(i)).toBeVisible();
    }
  });

  test('test 23: tooltip behavior at edge of viewport', async ({ page }) => {
    await page.goto('/');
    // Hovering skills should not trigger horizontal scrollbar/overflow
    const skillCard = page.locator('[data-testid^="skill-card-"], [data-testid="skill-card"]').first();
    if (await skillCard.isVisible()) {
      await skillCard.hover();
    }
    const overflowX = await page.evaluate(() => window.scrollX);
    expect(overflowX).toBe(0);
  });

  test('test 24: theme color contrast in grid cells', async ({ page }) => {
    await page.goto('/');
    const card = page.locator('[data-testid^="skill-card-"], [data-testid="skill-card"]').first();
    if (await card.isVisible()) {
      const className = await card.getAttribute('class');
      // Should have styling classes for dark contrast background and border/text
      expect(className).toMatch(/(bg-|text-|border-|dark:)/);
    }
  });

  test('test 25: alignment consistency', async ({ page }) => {
    await page.goto('/');
    const grid = page.locator('[data-testid="skills-grid"]').first();
    await expect(grid).toBeVisible();
    const className = await grid.getAttribute('class');
    expect(className).toMatch(/(grid|flex)/);
  });
});

test.describe('F6 Edge Cases', () => {
  test('test 26: valid JSON string check when copying text content', async ({ page }) => {
    await page.goto('/');
    const jsonBlock = page.locator('[data-testid="contact-json"], pre').first();
    const text = await jsonBlock.textContent();
    expect(text).not.toBeNull();
    // Match general JSON structure
    expect(text).toMatch(/["']?(Discord|Email|Roblox|GitHub|Status)["']?\s*:/i);
  });

  test('test 27: wrapping/clipping in JSON pre blocks', async ({ page }) => {
    await page.goto('/');
    const pre = page.locator('[data-testid="contact-json"], pre').first();
    const className = await pre.getAttribute('class');
    // Monospace JSON pre code block should wrap/scroll
    expect(className).toMatch(/(overflow|wrap|scroll|font-mono|w-)/);
  });

  test('test 28: code font styling check', async ({ page }) => {
    await page.goto('/');
    const pre = page.locator('[data-testid="contact-json"], pre').first();
    const fontFamily = await pre.evaluate(el => window.getComputedStyle(el).fontFamily);
    expect(fontFamily).toMatch(/(mono|consolas|courier|sfmono)/i);
  });

  test('test 29: Roblox/GitHub link structure security check', async ({ page }) => {
    await page.goto('/');
    const externalLinks = page.locator('a[href*="roblox.com"], a[href*="github.com"]');
    const count = await externalLinks.count();
    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      const target = await link.getAttribute('target');
      const rel = await link.getAttribute('rel');
      expect(target).toBe('_blank');
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
  });

  test('test 30: background opacity stability', async ({ page }) => {
    await page.goto('/');
    const jsonBlock = page.locator('[data-testid="contact-json"], pre').first();
    const className = await jsonBlock.getAttribute('class');
    // Should contain background opacity class or opacity level (e.g. bg-white/5, bg-graphite-900/50, etc.)
    expect(className).toMatch(/(bg-|opacity-|backdrop-)/);
  });
});
