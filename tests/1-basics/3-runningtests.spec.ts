/*
 ? More at: https://playwright.dev/docs/running-tests
 * * Run All Tests: npx playwright test - we can skip it, already done.
 * * Run A Single Test: npx playwright test 1-example.spec.ts || npx playwright test 3-runningtests.spec.ts
 * * Run a Set of test files: npx playwright test tests/1-basics - we can skip it, already done.
 * * Run files that have 'pattern' in its file name: npx playwright test example hooks
 * * Run the test with the title: npx playwright test -g "test"
 * * Headed Mode: npx playwright test 1-example.spec.ts --headed
 * * Running tests on a specific project: npx playwright test 1-example.spec.ts --headed --project=firefox
 * * ------ DEBUGGING NOTES:
 * * Debugging all tests: npx playwright test --debug
 * * Debugging one test file: npx playwright test 1-example.spec.ts --debug
 */

import { test } from "@playwright/test";

test.describe("Hooks", () => {
  test.beforeAll(async () => {
    console.log("I am a before All");
  });

  test.beforeEach(async () => {
    console.log("I am a before Each");
  });

  test("test #1", async () => {
    console.log("test #1");
  });

  test("test #2", async () => {
    console.log("test #2");
  });
  test("test #3", async () => {
    console.log("test #3");
  });

  test.afterEach(async () => {
    console.log("I am an after Each");
  });

  test.afterAll(async () => {
    console.log("I am a after All");
  });
});
