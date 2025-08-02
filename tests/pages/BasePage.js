export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async click(selector, options = {}) {
    await this.page.click(selector, options);
  }

  async type(selector, text, options = {}) {
    await this.page.fill(selector, text, options);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  async waitForElement(selector, options = {}) {
    await this.page.waitForSelector(selector, options);
  }

  async waitForElementToBeVisible(selector, options = {}) {
    await this.page.waitForSelector(selector, { state: 'visible', ...options });
  }

  async waitForElementToBeHidden(selector, options = {}) {
    await this.page.waitForSelector(selector, { state: 'hidden', ...options });
  }

  async getAttribute(selector, attribute) {
    return await this.page.getAttribute(selector, attribute);
  }

  async isEnabled(selector) {
    return await this.page.isEnabled(selector);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async takeScreenshot(path) {
    await this.page.screenshot({ path });
  }

  async waitForTimeout(timeout) {
    await this.page.waitForTimeout(timeout);
  }

  async getElementCount(selector) {
    return await this.page.locator(selector).count();
  }

  async hover(selector) {
    await this.page.hover(selector);
  }

  async doubleClick(selector) {
    await this.page.dblclick(selector);
  }

  async rightClick(selector) {
    await this.page.click(selector, { button: 'right' });
  }
}
