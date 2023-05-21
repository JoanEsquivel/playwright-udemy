//Run this test: npx playwright test --ui

//https://playwright.dev/docs/mock#mock-api-requests
//https://playwright.dev/docs/network
//https://timdeschryver.dev/blog/intercepting-http-requests-with-playwright#intercept-a-request-to-return-mocked-response

//Testing list: https://github.com/JoanEsquivel/testing-lists

//-> https://playwright.dev/docs/mock#mock-api-requests

// Web APIs are usually implemented as HTTP endpoints.
// Playwright provides APIs to mock and modify network traffic, both HTTP and HTTPS.
// Any requests that a page does, including XHRs and fetch requests, can be tracked, modified and mocked.+

// More info about request handling at: https://playwright.dev/docs/network#abort-requests

import { test, expect } from '@playwright/test'
test.describe('Mock data using Playwright - Abort', () => {
    test.beforeEach(async ({ context }) => {
        // Custom Route that mocks network for a browser context.
        // Block any css requests for each test in this file.
        await context.route(/.css$/, (route) => route.abort())
        //We can use page.route to mock a single page.
    })
    test('loading the website without css! ', async ({ page }) => {
        await page.goto('https://demo.playwright.dev/todomvc')
    })
})

test.describe('Mock data using Playwright - Fulfill ', () => {
    test('Mock API requests', async ({ page, request }) => {
        //will intercept all the calls to http://localhost:3000/todos & and will return the test data instead
        await page.route('http://localhost:3000/todos', async (route) => {
            const json = [
                {
                    completed: true,
                    id: '100',
                    title: 'mocked completed todo',
                },
            ]
            await route.fulfill({ json })
        })
        await page.goto('http://localhost:3000/')
    })
})
