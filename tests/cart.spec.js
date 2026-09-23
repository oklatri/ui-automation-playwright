const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test.describe('Cart', () => {
  let loginPage, inventoryPage, cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC-007: Add one item to cart', async () => {
    await inventoryPage.addToCart('Sauce Labs Backpack');
    const count = await inventoryPage.getCartCount();
    expect(count).toBe(1);
  });

  test('TC-009: Add multiple items to cart', async () => {
    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.addToCart('Sauce Labs Bike Light');
    await inventoryPage.addToCart('Sauce Labs Bolt T-Shirt');
    const count = await inventoryPage.getCartCount();
    expect(count).toBe(3);
  });

  test('TC-008: Remove item from cart', async () => {
    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.removeFromCart('Sauce Labs Backpack');
    const count = await inventoryPage.getCartCount();
    expect(count).toBe(0);
  });

  test('TC-016: Cart shows added items', async () => {
    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.addToCart('Sauce Labs Bike Light');
    await inventoryPage.goToCart();
    await expect(cartPage.cartItems).toHaveCount(2);
  });
});