import { test, expect } from "@playwright/test";

/*
 * * Describe: to declare a group of tests
 !   test.beforeAll and test.afterAll which are executed once per worker before/after all tests.
 */
test.describe("Hooks", () => {
  test.beforeAll(async () => {
    console.log("I am a before All");
  });

  test.beforeEach(async ({ page }) => {
    console.log("I am a before Each");
  });

  test("test #1", async ({ page }) => {
    console.log("test #1");
  });

  test("test #2", async ({ page }) => {
    console.log("test #2");
  });
  test("test #3", async ({ page }) => {
    console.log("test #3");
  });

  test.afterEach(async ({ page }) => {
    console.log("I am an after Each");
  });

  test.afterAll(async ({ page }) => {
    console.log("I am a after All");
  });
});
