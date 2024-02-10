import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { PageLogin } from './page-login';
import { PageHome } from './page-home';

test('should be able to add new product', async ({ page }) => {
  const pageLogin = new PageLogin(page);
  const pageHome = new PageHome(page);
  
  // Attempt login
  await pageLogin.goto();
  await pageLogin.login(process.env.SALLAUSERNAME, process.env.SALLAPASSWORD);
  await expect(pageHome.menuProducts).toBeVisible();

  // Dashboard is now shown to user.
  await pageHome.menuProducts.click();

  // Open product page and add a Ready product
  await pageHome.addProductDropdown.click();
  await pageHome.addProductItemReady.click();
  await expect(pageHome.addProductForm).toBeInViewport();
  
  // Fill product info
  var productName = faker.commerce.productName();
  await pageHome.addProductName.fill(productName);
  await pageHome.addProductPrice.fill(faker.commerce.productPrice());

});

test('should show Page Object Model article', async ({ page }) => {
  const pageLogin = new PageLogin(page);
  await pageLogin.goto();
});
