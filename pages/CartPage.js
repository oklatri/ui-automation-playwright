class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async getItemsCount() {
    return await this.cartItems.count();
  }

  async getItemNames() {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }

  async removeItem(productName) {
    const button = this.page.locator(
      `.cart_item:has-text("${productName}") button`
    );
    await button.click();
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };