// playwright.config.js
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  use: {
    browserName: "chromium",
    headless: true,
    baseURL: "https://www.saucedemo.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 10000,
    navigationTimeout: 15000,
  },
  projects: [
    {
      name: "Chromium",
      use: { ...devices["Desktop Chrome"], trace: "on" },
    },
    {
      name: "Firefox",
      use: { ...devices["Desktop Firefox"], trace: "retain-on-failure" },
    },
    {
      name: "WebKit",
      use: { ...devices["Desktop Safari"], trace: "retain-on-failure" },
    },
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"], trace: "on" },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"], trace: "on" },
    },
  ],
  reporter: [
    ["list"],
    ["html", { open: "never" }],
    ["junit", { outputFile: "test-results/junit.xml" }],
    ["json", { outputFile: "test-results/results.json" }]
  ],
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
});
