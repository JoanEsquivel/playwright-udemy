import { test } from "@playwright/test";

/*
 ? More at https://playwright.dev/docs/next/test-annotations
 * * They are important to to deal with failures, flakiness, skip, focus and tag tests:
 * * test.only
 * * test.skip
 * * test.fail
 * * test.fixme
 * * test.slow
 * * npx playwright test 6-annotations.spec.ts --headed
 */
test.describe("Annotations", () => {
  //! Focus example
  // test.only("I am the only test case to be executed", async () => {
  //   console.log("Hello, I am the only one");
  // });
  //! Skip example
  // test("I am the only test case to be executed", async () => {
  //   console.log("Hello, I am the only one");
  // });
  // test.skip("I am the skipped test", async () => {
  //   console.log("Hello, I am the skipped test");
  // });
  //! Conditional skip a test
  // test("skip this test", async ({ browserName }) => {
  //   test.skip(browserName === "firefox", "Still working on it");
  //   console.log("this text should not be displayed.");
  // });
  //! Tag Tests
  // RUN IN BASH -> npx playwright test --grep @feature1
  // test("Test 1 for @feature1", async () => {
  //   console.log("Feature 1");
  // });
  // test("Test 2 for @feature2", async () => {
  //   console.log("Feature 2");
  // });
  // test("Test 3 for @feature2", async () => {
  //   console.log("Feature 2");
  // });
  // test("Test 4 for @feature1", async () => {
  //   console.log("Feature 1");
  // });
  //! Run a describe conditionally
  //We are in the describe scope, so I will be adding a describe skip
  // test.skip(({ browserName }) => browserName !== "chromium", "Chromium only!");
  // test("Test 1", async () => {
  //   console.log("Test 1");
  // });
  // test("Test 2", async () => {
  //   console.log("Test 2");
  // });
  //! Fixme
  // test.beforeEach(async () => {
  //   //We can check if the test to be executed is mobile, and evaluate it with a hook
  //   test.fixme(true, "Not working on mobile");
  // });
  // test("menu test", async () => {
  //   console.log("This should not be logued");
  // });
  //!Info annotations
  // test("menu test", async () => {
  //   test.info().annotations.push({
  //     type: "issue",
  //     description:
  //       "https://github.com/microsoft/playwright/issues/<some-issue>",
  //   });
  //   console.log("Action #1");
  //   console.log("Action #2");
  // });
});
