import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = "#user-name";
    this.passwordInput = "#password";
    this.loginButton = "#login-button";
    this.errorMessage = "[data-test='error']";
    this.errorContainer = ".error-message-container";
  }

  async navigate() {
    await this.page.goto("/");
  }

  async login(username, password) {
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  
  async getErrorMessage() {
    try {
      return await this.getText(this.errorMessage);
    } catch (error) {
      return null;
    }
  }

  async isErrorVisible() {
    return await this.isVisible(this.errorContainer);
  }

  async clearFields() {
    await this.page.fill(this.usernameInput, "");
    await this.page.fill(this.passwordInput, "");
  }

  async getUsernameValue() {
    return await this.page.inputValue(this.usernameInput);
  }

  async getPasswordValue() {
    return await this.page.inputValue(this.passwordInput);
  }

  async isLoginButtonEnabled() {
    return await this.page.isEnabled(this.loginButton);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState("networkidle");
  }
}
