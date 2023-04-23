/*
 * * npx playwright codegen website
 * * npx playwright codegen https://demoqa.com/
 * * To run this script: npx playwright test 4-testGenerator.spec.ts --headed
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
    ).toHaveText('Permananet Address :permanent address')
})
