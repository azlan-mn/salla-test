import { expect, type Locator, type Page } from '@playwright/test';

export class PageLogin {
  page: Page;
  email: Locator;
  password: Locator;
  submit: Locator;
  signin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('#login-email');
    this.password = page.locator('#login-password');
    this.submit = page.locator('.register-login button[type="submit"]');
    this.signin = page.locator('h3', { hasText: 'تسجيل الدخول'});
  }

  async login(email: string, password: string): void {
    await this.signin.click();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }

  async goto() {
    await this.page.goto('https://s.salla.sa/login');
  }
}

