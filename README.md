# SauceDemo Test Automation Framework

A comprehensive test automation framework for the SauceDemo application using Playwright.

## 🚀 Features

- **Modern Test Framework**: Built with Playwright for reliable cross-browser testing
- **Page Object Model**: Clean separation of test logic and page interactions
- **Cross-Browser Support**: Tests run on Chrome, Firefox, Safari, and mobile browsers
- **Comprehensive Reporting**: HTML, JUnit, and JSON reports
- **CI/CD Ready**: Configured for continuous integration environments
- **Mobile Testing**: Support for mobile Chrome and Safari

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saucedemo-refresher
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npm run install:browsers
```

## 🧪 Running Tests

### Basic Commands
```bash
# Run all tests
npm test

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests with debug mode
npm run test:debug

# Run tests with Playwright UI
npm run test:ui
```

### Browser-Specific Testing
```bash
# Run tests on specific browser
npx playwright test --project="Chromium"
npx playwright test --project="Firefox"
npx playwright test --project="WebKit"
npx playwright test --project="Mobile Chrome"
npx playwright test --project="Mobile Safari"
```

### Reporting
```bash
# View HTML report
npm run test:report

# Generate JUnit report for CI
npx playwright test --reporter=junit
```

## 📁 Project Structure

```
tests/
├── e2e/                    # End-to-end test specifications
│   └── login.spec.js      # Login functionality tests
├── pages/                  # Page Object Model classes
│   ├── BasePage.js        # Base page with common methods
│   ├── LoginPage.js       # Login page interactions
│   └── InventoryPage.js   # Inventory page interactions
└── test-data/             # Test data files
    └── users.js           # User credentials and data
```

## 🏗️ Architecture

### Page Object Model (POM)
- **BasePage**: Common methods and utilities for all pages
- **LoginPage**: Login-specific interactions and validations
- **InventoryPage**: Inventory page interactions

### Test Data Management
- Externalized test data in `test-data/users.js`
- Support for multiple user types (standard, locked, problem)
- Easy to extend for additional test scenarios

### Configuration
- Multi-browser support (Chrome, Firefox, Safari, Mobile)
- Configurable timeouts and retries
- CI/CD optimized settings
- Comprehensive reporting

## 🔧 Configuration

### Playwright Configuration (`playwright.config.js`)
- **Browsers**: Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari
- **Timeouts**: 30s test timeout, 5s expect timeout
- **Reporting**: HTML, JUnit, JSON reports
- **Retries**: 2 retries in CI environment
- **Screenshots/Videos**: Captured on test failure

### Environment Variables
```bash
# Run in CI mode (single worker, retries enabled)
CI=true npm test

# Run with specific browser
BROWSER=firefox npm test
```

## 📊 Test Reports

After running tests, reports are generated in:
- **HTML Report**: `playwright-report/index.html`
- **JUnit Report**: `test-results/junit.xml`
- **JSON Report**: `test-results/results.json`

## 🧹 Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix
```

## 🚀 CI/CD Integration

### GitHub Actions Example
```yaml
name: E2E Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run install:browsers
      - run: npm test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## 📈 Best Practices

1. **Page Object Model**: Keep test logic separate from page interactions
2. **Test Data Management**: Externalize test data for maintainability
3. **Cross-Browser Testing**: Test on multiple browsers for reliability
4. **Error Handling**: Implement proper error handling and assertions
5. **Reporting**: Use comprehensive reporting for debugging
6. **CI/CD Ready**: Configure for automated testing pipelines

## 🤝 Contributing

1. Follow the existing code structure
2. Add tests for new features
3. Update documentation as needed
4. Run linting before committing

## 📝 License

ISC License 