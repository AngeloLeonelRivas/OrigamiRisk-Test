# Login tests

Small Playwright project that checks the login page at
https://the-internet.herokuapp.com/login.

## Setup

You need Node.js installed.

```bash
npm install
npx playwright install chromium
```

## Run the tests

```bash
npm test
```

To watch the browser while the tests run:

```bash
npx playwright test --headed
```

## What is covered

- Valid username and password: the app goes to `/secure` and shows a success message.
- Wrong username: the app stays on `/login` and shows an error.
- Wrong password: the app stays on `/login` and shows an error.

Valid credentials used by the tests: `tomsmith` / `SuperSecretPassword!`.

## Project layout

- `playwright.config.js` — base URL and where the tests live
- `pages/loginPage.js` — locators and the login action
- `tests/login.spec.js` — the three test cases
