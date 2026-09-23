class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addToCart(productName) {
    const item = this.page.locator('.inventory_item', { hasText: productName });
    const addButton = item.getByRole('button', { name: 'Add to cart' });
    await addButton.click();
  }

  async removeFromCart(productName) {
    const button = this.page.locator(
      `.inventory_item:has-text("${productName}") button`
    );
    await button.click();
  }

  async getCartCount() {
    if (await this.cartBadge.count() === 0) return 0;
    return parseInt(await this.cartBadge.textContent());
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}

module.exports = { InventoryPage };