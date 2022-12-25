import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('Good stuff from Playwright #1', () => {
    test('#1- Info annotation', async ({ page }) => {
        //RUN: npx playwright test first-video.spec.ts --headed
        test.info().annotations.push({
            type: "issue",
            description:
                "https://github.com/microsoft/playwright/issues/<some-issue>",
        });

        // Create 1st todo.
        await page.locator('.new-todo').fill('good stuff #1');
        await page.locator('.new-todo').press('Enter');

        // Make sure the list only has one todo item.
        await expect(page.locator('.view label')).toHaveText([
            'good stuff #2'
        ]);
    });

    test('#2- Download browsers is so easy', async ({ page }) => {
        /*
            * First Approach 
            - Install the VSCode Extension
            - Ctrl + Shift + P
            - Type Playwright, and select "Test: Install Playwright Browsers" 
        */
       /*
            * Second approach
            - npx playwright install chromium firefox webkit 
       */
    });

    test('#3- Debug options', async ({ page }) => {
        //RUN: npx playwright test first-video.spec.ts --headed --debug --project=firefox
        //Using VS Code

        // Create 1st todo.
        await page.locator('.new-todo').fill('good stuff #1');
        await page.locator('.new-todo').press('Enter');

        // Make sure the list only has one todo item.
        await expect(page.locator('.view label')).toHaveText([
            'good stuff #1'
        ]);
    });

    test.only('#4- Soft Assertions', async ({ page }) => {
        //RUN: npx playwright test first-video.spec.ts --headed --debug --project=firefox
        //Using VS Code

        // Create 1st todo.
        await page.locator('.new-todo').fill('good stuff #1');
        await page.locator('.new-todo').press('Enter');

        await expect(page.locator('.view label')).toHaveText([
            'good stuff #3'
        ]);

        await page.locator('.new-todo').fill('good stuff #2');
        await page.locator('.new-todo').press('Enter');

        // Make sure the list only has one todo item.
        await expect(page.locator('.view label')).toHaveText([
            'good stuff #1','good stuff #2'
        ]);
    });



});