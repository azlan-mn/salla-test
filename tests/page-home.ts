import { expect, type Locator, type Page } from '@playwright/test';

export class PageHome {
  readonly page: Page;
  readonly menuProducts: Locator;
  readonly addButton: Locator;
  readonly addProductDropdown: Locator;
  readonly addProductItemReady: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuProducts = page.locator('a[href$="salla.sa/products"]');
    this.addProductDropdown = page.locator('#add-btn');
    this.addProductItemReady = page.locator('a:has(.sicon-packed-box)');

    this.addProductForm = page.locator('form:has(.btn-remove)');
    this.addProductSubmit = this.addProductForm.locator('.submit-wrapper button[class*="btn-save"]');
    this.addProductName = this.addProductForm.locator('input[data-lang="ar"]');
    this.addProductPrice = this.addProductForm.locator('[class*="product-price"]');
    this.addProductImage = this.addProductForm.locator('');
    
    this.addProductCategoryDropdown = this.addProductForm.locator('.categories .vue-treeselect__control');
    this.addProductCategoryItem = this.addProductForm.locator('form:has(.btn-remove) .vue-treeselect__list-item');
    this.placeH = page.locator('');
    this.placeH = page.locator('');
    this.placeH = page.locator('');
    this.placeH = page.locator('');
  }

  async addNewProduct(productName: string, price: string, quantity: string ) {
    await this.menuProducts.click();
    await this.addProductDropdown.click();
    await this.addProductItemReady.click();
    await this.addProductName.fill(productName);
    await this.addProductPrice.fill(price);
    await this.addProductSubmit.click();
  }

  async selectCategoryByText(category: string) {
    await this.addProductCategoryDropdown.click();
    await this.addProductCategoryItem.locator({ hasText: category }).first().click(); 
  }
}
