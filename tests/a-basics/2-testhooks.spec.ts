import { test } from '@playwright/test'

/*
 ? More at https://playwright.dev/docs/writing-tests
 * * Describe: to declare a group of tests
 !   test.beforeAll and test.afterAll which are executed once per worker before/after all tests.
 */
test.describe('Hooks', () => {
    test.beforeAll(async () => {
        console.log('I am a before All')
    })

    test.beforeEach(async () => {
        console.log('I am a before Each')
    })

    test('test #1', async () => {
        console.log('test #1')
    })

    test('test #2', async () => {
        console.log('test #2')
    })
    test('test #3', async () => {
        console.log('test #3')
    })

    test.afterEach(async () => {
        console.log('I am an after Each')
    })

    test.afterAll(async () => {
        console.log('I am a after All')
    })
})
