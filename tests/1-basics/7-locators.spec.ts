/*
    ? Locators help us to map web elements to interact with our web application.
*/
import { test, expect, type Page } from "@playwright/test";

test.describe("Locators", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
  });

  test("By Placeholder", async ({ page }) => {
    await page
      .getByPlaceholder("Full Name")
      .fill('Joan Esquivel');
  });
});
