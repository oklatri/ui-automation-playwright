# UI Automation — Playwright

Проект **автотестов** для UI-тестирования сайта [SauceDemo](https://www.saucedemo.com/) на **Playwright**.

## Что это

Автотесты **проверяют** **логин** на SauceDemo: валидные и невалидные данные, заблокированный пользователь, пустые поля.

## Инструменты

- **Playwright** (автотесты UI)
- **JavaScript** (Node.js)
- **Page Object Model** (POM)

## Что внутри

- `tests/login.spec.js` — **4 автотеста** для логина
- `pages/LoginPage.js` — **Page Object** для страницы логина
- `playwright.config.js` — **конфиг** Playwright

## Тесты

| # | Тест | Что проверяет |
|---|---|---|
| TC-001 | Login with standard_user | Успешный логин |
| TC-002 | Login with locked_out_user | Заблокированный пользователь |
| TC-003 | Login with invalid credentials | Неверные данные |
| TC-004 | Login with empty fields | Пустые поля |
| TC-005 | Add one item to cart | Добавление одного товара |
| TC-006 | Add multiple items to cart | Добавление нескольких товаров |
| TC-007 | Remove item from cart | Удаление товара из корзины |
| TC-008 | Cart shows added items | Отображение товаров в корзине |

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

## Результаты

```
Running 8 tests using 8 workers
  8 passed (4.4s)
```

## Структура

```
ui-automation-playwright/
├── pages/
│   └── LoginPage.js
├── tests/
│   └── login.spec.js
├── playwright.config.js
├── package.json
└── .gitignore
```

## Автор

Сергей — начинающий QA Engineer.
