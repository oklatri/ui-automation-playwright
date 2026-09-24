# UI Automation — Playwright

[![Playwright Tests](https://github.com/oklatri/ui-automation-playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/oklatri/ui-automation-playwright/actions/workflows/playwright.yml)

Проект **автотестов** для UI-тестирования сайта [SauceDemo](https://www.saucedemo.com/) на **Playwright**.

## Что это

Автотесты **проверяют**:
- **Логин** — валидные и невалидные данные, заблокированный пользователь, пустые поля.
- **Корзину** — добавление, удаление, счётчик, отображение товаров.

## Инструменты

- **Playwright** (автотесты UI)
- **JavaScript** (Node.js)
- **Page Object Model** (POM)
- **GitHub Actions** (CI/CD)

## Что внутри

- `.github/workflows/playwright.yml` — CI-конфиг для GitHub Actions
- `tests/login.spec.js` — **4 автотеста** для логина
- `tests/cart.spec.js` — **4 автотеста** для корзины
- `pages/LoginPage.js` — Page Object для страницы логина
- `pages/InventoryPage.js` — Page Object для каталога товаров
- `pages/CartPage.js` — Page Object для корзины
- `playwright.config.js` — конфиг Playwright

## Тесты

| # | Тест | Что проверяет |
|---|---|---|
| TC-001 | Login with standard_user | Успешный логин |
| TC-002 | Login with locked_out_user | Заблокированный пользователь |
| TC-017 | Login with invalid credentials | Неверные данные |
| TC-018 | Login with empty fields | Пустые поля |
| TC-007 | Add one item to cart | Добавление одного товара |
| TC-009 | Add multiple items to cart | Добавление нескольких товаров |
| TC-008 | Remove item from cart | Удаление товара из корзины |
| TC-016 | Cart shows added items | Отображение товаров в корзине |

## Как запустить

1. **Установи** **зависимости**:
   ```
   npm install
   ```

2. **Установи** **браузеры** **Playwright**:
   ```
   npx playwright install
   ```

3. **Запусти** **тесты**:
   ```
   npx playwright test
   ```

4. **Открой** **отчёт**:
   ```
   npx playwright show-report
   ```

## CI/CD

При **каждом** **push** **в** **ветку** `main` **GitHub** **Actions** **автоматически**:
1. **Устанавливает** **зависимости**.
2. **Устанавливает** **браузеры** **Playwright**.
3. **Запускает** **8** **тестов**.
4. **Сохраняет** **HTML-отчёт** (**в** **Artifacts**).

**Статус** **CI**: **см.** **badge** **сверху**.

## Результаты

```
Running 8 tests using 8 workers
  8 passed (4.4s)
```

## Структура

```
ui-automation-playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   └── CartPage.js
├── tests/
│   ├── login.spec.js
│   └── cart.spec.js
├── playwright.config.js
├── package.json
└── .gitignore
```

## Автор

Сергей — начинающий QA Engineer.