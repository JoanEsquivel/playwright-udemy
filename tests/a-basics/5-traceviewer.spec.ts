/*
 * Playwright Trace Viewer is a GUI tool
 * that lets you explore recorded Playwright
 * traces of your tests meaning you can go back and forward
 * through each action of your test and visually see what was
 * happening during each action.
 */

/*
 * By default it is configured in the playwright.config.ts (line #42)
 * By default is on-first-retry meaning they will be run on the first retry of a failed test(on CI)
 */

/*
 * Traces are normally run in a Continuous Integration(CI) environment as locally you can use debugging methods to debug tests.
 * Force tracing using:To run this script: npx playwright test 5-traceviewer.spec.ts --headed --trace on
 */

/*
 * Traces are going to be part of the HTML Report.
 * You can also access with the command: "npx playwright show-trace {{path}}\trace.zip"
 */

import { test, expect } from '@playwright/test'

test('Text Box Example', async ({ page }) => {
    await page.goto('https://demoqa.com/')

    await page.locator('path').first().click()
    await expect(page).toHaveURL('https://demoqa.com/elements')

    await page.locator('li:has-text("Text Box")').click()

    await expect(page).toHaveURL('https://demoqa.com/text-box')

    await page.getByPlaceholder('Full Name').click()

    await page.getByPlaceholder('Full Name').fill('Joan')

    await page.getByPlaceholder('name@example.com').click()

    await page.getByPlaceholder('name@example.com').fill('joan@test.com')

    await page.getByPlaceholder('Current Address').click()

    await page.getByPlaceholder('Current Address').fill('test address')

    await page.locator('#permanentAddress').click()

    await page.locator('#permanentAddress').fill('permanent address')

    await page.getByRole('button', { name: 'Submit' }).click()

    await expect(page.getByText('Name:Joan')).toHaveText('Name:Joan')

    await expect(page.getByText('Email:joan@test.com')).toHaveText(
        'Email:joan@test.com'
    )

    await expect(page.getByText('Current Address :test address')).toHaveText(
        'Current Address :test address'
    )

    await expect(
        page.getByText('Permananet Address :permanent address')
    ).toHaveText('Permananet Address :permanent addressss')
})
