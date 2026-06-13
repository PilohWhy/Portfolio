import { test, expect } from '@playwright/test';

test.describe('F1: Dev Vocabulary / IDE Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('test 1: export keyword visible', async ({ page }) => {
    const kw = page.locator('[data-testid="keyword-export"], nav >> text="export"').first();
    await expect(kw).toBeVisible();
  });

  test('test 2: import keyword visible', async ({ page }) => {
    const kw = page.locator('[data-testid="keyword-import"], nav >> text="import"').first();
    await expect(kw).toBeVisible();
  });

  test('test 3: function keyword visible', async ({ page }) => {
    const kw = page.locator('[data-testid="keyword-function"], nav >> text="function"').first();
    await expect(kw).toBeVisible();
  });

  test('test 4: local keyword visible', async ({ page }) => {
    const kw = page.locator('[data-testid="keyword-local"], nav >> text="local"').first();
    await expect(kw).toBeVisible();
  });

  test('test 5: clickable routing links are visible and hoverable', async ({ page }) => {
    const links = [
      { testId: 'nav-link-about', text: 'about' },
      { testId: 'nav-link-skills', text: 'skills' },
      { testId: 'nav-link-projects', text: 'projects' },
      { testId: 'nav-link-reviews', text: 'reviews' },
      { testId: 'nav-link-contact', text: 'contact' },
    ];

    for (const link of links) {
      const el = page.locator(`[data-testid="${link.testId}"], nav a:has-text("${link.text}")`).first();
      await expect(el).toBeVisible();
      await el.hover();
    }

    const initialUrl = page.url();
    const kw = page.locator('[data-testid="keyword-export"], nav >> text="export"').first();
    await kw.click({ force: true });
    expect(page.url()).toBe(initialUrl);
  });
});

test.describe('F2: Main Page Summarized Cards', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('test 6: project cards display on main page', async ({ page }) => {
    const cards = page.locator('[data-testid="project-card"]');
    await expect(cards.first()).toBeVisible();
  });

  test('test 7: cards use snippet and not full description', async ({ page }) => {
    const card = page.locator('[data-testid="project-card"]').first();
    await expect(card).toBeVisible();
    
    const snippet = card.locator('[data-testid="project-snippet"]');
    await expect(snippet.or(card.locator('.font-mono'))).toBeVisible();
    
    const fullDescPart = "Developed a custom low-level 3D game engine using Vulkan API with a strict focus on Data-Oriented Design";
    const text = await card.textContent();
    expect(text).not.toContain(fullDescPart);
  });

  test('test 8: exactly 5 projects are rendered', async ({ page }) => {
    const cards = page.locator('[data-testid="project-card"]');
    await expect(cards).toHaveCount(5);
  });

  test('test 9: cards have hover animation cues', async ({ page }) => {
    const card = page.locator('[data-testid="project-card"]').first();
    const className = await card.getAttribute('class');
    expect(className).toMatch(/(transition|duration|hover:|transform|group)/);
  });

  test('test 10: compact cards layout matches bento/grid design', async ({ page }) => {
    const grid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
    await expect(grid).toBeVisible();
    const className = await grid.getAttribute('class');
    expect(className).toContain('grid');
  });
});

test.describe('F3: Dynamic Routing', () => {
  test('test 11: clicking a card routes to /projects/[slug]', async ({ page }) => {
    await page.goto('/');
    const card = page.locator('[data-testid="project-card"]').first();
    await card.click();
    await page.waitForURL(/\/projects\/.+/);
    expect(page.url()).toContain('/projects/');
  });

  test('test 12: details page shows full description', async ({ page }) => {
    await page.goto('/');
    const card = page.locator('[data-testid="project-card"]').first();
    const snippetText = await card.locator('[data-testid="project-snippet"], .font-mono').first().textContent();
    
    await card.click();
    await page.waitForURL(/\/projects\/.+/);
    
    const desc = page.locator('[data-testid="project-description"]');
    await expect(desc).toBeVisible();
    const descText = await desc.textContent();
    expect(descText?.length).toBeGreaterThan(snippetText?.length || 0);
  });

  test('test 13: details page displays metadata', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-testid="project-card"]').first().click();
    await page.waitForURL(/\/projects\/.+/);

    const role = page.locator('[data-testid="project-role"]');
    const timeline = page.locator('[data-testid="project-timeline"]');
    const tech = page.locator('[data-testid="project-technologies"]');

    await expect(role).toBeVisible();
    await expect(timeline).toBeVisible();
    await expect(tech).toBeVisible();
  });

  test('test 14: details page displays challenges and solutions', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-testid="project-card"]').first().click();
    await page.waitForURL(/\/projects\/.+/);

    const challenges = page.locator('[data-testid="project-challenges"]');
    const solutions = page.locator('[data-testid="project-solutions"]');

    await expect(challenges).toBeVisible();
    await expect(solutions).toBeVisible();
  });

  test('test 15: back button/close returns to main page', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-testid="project-card"]').first().click();
    await page.waitForURL(/\/projects\/.+/);

    const backButton = page.locator('[data-testid="back-button"]');
    await backButton.click();
    await page.waitForURL(/\/$/);
    expect(page.url().endsWith('/')).toBe(true);
  });
});

test.describe('F4: Reviews Masonry Grid', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('test 16: reviews grid exists', async ({ page }) => {
    const grid = page.locator('[data-testid="reviews-grid"]');
    await expect(grid).toBeVisible();
  });

  test('test 17: exact text for @VoidWalker review', async ({ page }) => {
    const text = `"Insane work on the combat framework. the movement feels buttery smooth. totally worth the price, tho took a bit longer than expected to iron out the bugs. 4.5/5" - @VoidWalker`;
    const review = page.locator(`[data-testid="review-card-voidwalker"], [data-testid="review-card"]:has-text("@VoidWalker")`).first();
    await expect(review).toBeVisible();
    await expect(review).toContainText(text);
  });

  test('test 18: exact text for @Dev_Alex review', async ({ page }) => {
    const text = `"bro's low level knowledge is crazy. helped me optimize my voxel game from 20fps to steady 60. highly recommend. 5/5" - @Dev_Alex`;
    const review = page.locator(`[data-testid="review-card-devalex"], [data-testid="review-card"]:has-text("@Dev_Alex")`).first();
    await expect(review).toBeVisible();
    await expect(review).toContainText(text);
  });

  test('test 19: exact text for Studio Lead review', async ({ page }) => {
    const text = `"Very professional. The custom Luau VM integration was exactly what our engine needed. Clean code, well documented. 5/5" - Studio Lead (NDA)`;
    const review = page.locator(`[data-testid="review-card-studiolead"], [data-testid="review-card"]:has-text("Studio Lead (NDA)")`).first();
    await expect(review).toBeVisible();
    await expect(review).toContainText(text);
  });

  test('test 20: exact text for @NightmareDev review', async ({ page }) => {
    const text = `"the horror systems he coded are terrifyingly good. fake lag and audio manipulation worked flawlessly on production. 5/5" - @NightmareDev`;
    const review = page.locator(`[data-testid="review-card-nightmaredev"], [data-testid="review-card"]:has-text("@NightmareDev")`).first();
    await expect(review).toBeVisible();
    await expect(review).toContainText(text);
  });
});

test.describe('F5: Skills Grid Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('test 21: skills grid exists', async ({ page }) => {
    const grid = page.locator('[data-testid="skills-grid"]');
    await expect(grid).toBeVisible();
  });

  test('test 22: Low-Level & Engines card with visual icon exists', async ({ page }) => {
    const card = page.locator('[data-testid="skill-card-low-level"], [data-testid="skill-card"]:has-text("Low-Level & Engines")').first();
    await expect(card).toBeVisible();
    const icon = card.locator('svg, img').first();
    await expect(icon).toBeVisible();
  });

  test('test 23: Luau & Roblox Ecosystem card with visual icon exists', async ({ page }) => {
    const card = page.locator('[data-testid="skill-card-luau"], [data-testid="skill-card"]:has-text("Luau & Roblox Ecosystem")').first();
    await expect(card).toBeVisible();
    const icon = card.locator('svg, img').first();
    await expect(icon).toBeVisible();
  });

  test('test 24: Math & Algorithms card with visual icon exists', async ({ page }) => {
    const card = page.locator('[data-testid="skill-card-math"], [data-testid="skill-card"]:has-text("Math & Algorithms")').first();
    await expect(card).toBeVisible();
    const icon = card.locator('svg, img').first();
    await expect(icon).toBeVisible();
  });

  test('test 25: Architecture card with visual icon exists', async ({ page }) => {
    const card = page.locator('[data-testid="skill-card-architecture"], [data-testid="skill-card"]:has-text("Architecture")').first();
    await expect(card).toBeVisible();
    const icon = card.locator('svg, img').first();
    await expect(icon).toBeVisible();
  });
});

test.describe('F6: About & Contact Details (JSON)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('test 26: about text is rendered', async ({ page }) => {
    const aboutText = "Hey, I'm Piloh. I've been diving into code for over 5 years. My core passion lies in engineering robust, highly functional game mechanics built from the ground up for future scalability. I love digging into low-level architecture and relentlessly optimizing my code.";
    const el = page.locator('[data-testid="about-section"], [data-testid="about-text"]').first();
    const locator = el.or(page.locator('body'));
    await expect(locator).toContainText(aboutText);
  });

  test('test 27: quote block is rendered', async ({ page }) => {
    const quoteText = "I'd rather have a few bugs now than dozens later.";
    const el = page.locator('[data-testid="quote-block"], blockquote').first();
    const locator = el.or(page.locator('body'));
    await expect(locator).toContainText(quoteText);
  });

  test('test 28: contact details contain Discord, Email, Roblox, GitHub, Status', async ({ page }) => {
    const section = page.locator('[data-testid="contact-section"], [data-testid="contact-json"]').first();
    const locator = section.or(page.locator('body'));
    await expect(locator).toContainText('Discord');
    await expect(locator).toContainText('Email');
    await expect(locator).toContainText('Roblox');
    await expect(locator).toContainText('GitHub');
    await expect(locator).toContainText('Status');
  });

  test('test 29: contact details are formatted like JSON config output', async ({ page }) => {
    const section = page.locator('[data-testid="contact-json"], pre').first();
    const text = await section.textContent();
    expect(text).toMatch(/[\{\}\[\]"':,]/);
  });

  test('test 30: contact links are clickable anchors', async ({ page }) => {
    const robloxLink = page.locator('a[href*="roblox.com"]');
    await expect(robloxLink).toBeVisible();
    
    const githubLink = page.locator('a[href*="github.com"]');
    await expect(githubLink).toBeVisible();

    const emailLink = page.locator('a[href*="mailto:"]');
    await expect(emailLink).toBeVisible();
  });
});
