import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";
import { users } from "../test-data/users.js";

test.describe("SauceDemo Login Tests", () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
  });

  test.describe("Valid Login Scenarios", () => {
    test("Standard user can log in successfully", async ({ page }) => {
      await loginPage.login(users.standard.username, users.standard.password);
      await expect(page).toHaveURL(/.*inventory\.html/);
      expect(await inventoryPage.isInventoryVisible()).toBeTruthy();
    });

    test("Problem user can log in successfully", async ({ page }) => {
      await loginPage.login(users.problem.username, users.problem.password);
      await expect(page).toHaveURL(/.*inventory\.html/);
      expect(await inventoryPage.isInventoryVisible()).toBeTruthy();
    });
  });

  test.describe("Invalid Login Scenarios", () => {
    test("Locked out user cannot log in", async ({ page }) => {
      await loginPage.login(users.locked.username, users.locked.password);
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain("Sorry, this user has been locked out");
       expect(page).toHaveURL(/.*$/);
    });

    test("Invalid credentials show error message", async ({ page }) => {
      await loginPage.login("invalid_user", "invalid_password");
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain("Username and password do not match");
      await expect(page).toHaveURL(/.*$/);
    });

    test("Empty username shows error message", async ({ page }) => {
      await loginPage.login("", users.standard.password);
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain("Username is required");
      await expect(page).toHaveURL(/.*$/);
    });

    test("Empty password shows error message", async ({ page }) => {
      await loginPage.login(users.standard.username, "");
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain("Password is required");
      await expect(page).toHaveURL(/.*$/);
    });
  });

  test.describe("UI Elements", () => {
    test("Login form elements are visible", async ({ page }) => {
      await expect(page.locator("#user-name")).toBeVisible();
      await expect(page.locator("#password")).toBeVisible();
      await expect(page.locator("#login-button")).toBeVisible();
    });

    test("Login button has correct text", async ({ page }) => {
      const loginButton = page.locator("#login-button");
      await expect(loginButton).toHaveText("Login");
    });
  });
});
