/*
    * Locators help us to map web elements to interact with our web application.
    ? More at: https://playwright.dev/docs/locators#quick-guide
*/
import { test} from "@playwright/test";

test.describe("Locators", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
  });

  test("Locators Examples", async ({ page }) => {
    await page
      .getByPlaceholder("Full Name")
      .fill('Joan Esquivel');
    await page
      .locator('[type="email"]')
      .fill('joan@test.com')
    await page
      .locator('//textarea[@placeholder="Current Address"]')
      .fill('my current address')
    await page
      .locator('#permanentAddress')
      .fill('my permanent address')
    await page
      .getByRole('button', {name: "submit"})
      .click()
  });
});
