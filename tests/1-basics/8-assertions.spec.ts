import {expect, test} from "@playwright/test";

/*

*  Assertions allows us to test if the actual result is the expected one.
? More info at: https://playwright.dev/docs/test-assertions
*/

test.describe("Assertions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/checkbox");
  });

  test("Happy path example", async ({ page }) => {
    await page
      .getByTitle('Toggle')
      .click()
    await page
      .locator('[for="tree-node-documents"]')
      .click()
    await expect(page.locator('#result')).toContainText('documents')
  });
  test("Unhappy path example", async ({ page }) => {
    await page
      .getByTitle('Toggle')
      .click()
    await page
      .locator('[for="tree-node-desktop"]')
      .click()
    await expect(page.locator('#result')).not.toContainText('documents')
  });
  test.skip("Soft Assertions", async ({ page }) => {
    await page
      .getByTitle('Toggle')
      .click()
    await page
      .locator('[for="tree-node-desktop"]')
      .click()
    //! STANDARD ASSERTIONS
    await expect(page.locator('#result')).not.toContainText('notes')
    // * place a debug dot here to prove it.
    await expect(page.locator('#result')).toContainText('desktop')
    //! SOFT ASSERTIONS
    await expect.soft(page.locator('#result')).not.toContainText('notes')
    // * place a debug dot here to prove it.
    // await expect.soft(page.locator('#result')).toContainText('desktop')
  });
  test("Custom Error Message", async ({ page }) => {
    //! RUN: npx playwright test 8-assertions.spec.ts --headed
    await page
      .getByTitle('Toggle')
      .click()
    await page
      .locator('[for="tree-node-documents"]')
      .click()
    await expect(page.locator('#result'), 'Custom Error Message').toContainText('documentss')
  });
});