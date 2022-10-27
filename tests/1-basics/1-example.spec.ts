import { test, expect } from "@playwright/test";

/*
 * * Test: These tests are executed in Playwright environment that launches the browser and provides a fresh page to each test. Check the parameters expected at: https://playwright.dev/docs/api/class-test#test-call
 * * Fixtures: Playwright Test is based on the concept of the test fixtures.  They are used to establish environment for each test, giving the test everything it needs and nothing else.
 * * {page}: Isolated [Page] instance, created for each test. Pages are isolated between tests due to fixtures.context isolation.
 ?   What is the fixtures.context isolation?
 * * Isolated BrowserContext instance, created for each test. Since contexts are isolated between each other, every test gets a fresh environment, even when multiple tests run in a single Browser for maximum efficiency.
 ?   What is the BrowserContext?
 * * BrowserContexts provide a way to operate multiple independent browser sessions.
 */

/*
 ? Async Await
 * * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * * An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
 */

test("homepage has Playwright in title and get started link linking to the intro page", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByText("Get Started");

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute("href", "/docs/intro");

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
