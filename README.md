# Playwright UI Testing Mastery: Practice Framework

A ready-to-use Playwright framework template for completing the practice assignments of the
[**Playwright UI Testing Mastery**](https://bondaracademy.com/programs/playwright-ui-testing-mastery)
program by Bondar Academy.

The template comes preconfigured with authentication, environment variables, and a sample test.

---

## Prerequisites

| Requirement | Version |
| --- | --- |
| [Node.js](https://nodejs.org/) | 24 or higher |
| npm | bundled with Node.js |
| Bondar Academy account | required for login |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create the `.env` file

Copy `.env-SAMPLE` to `.env` in the root of the project:

```bash
cp .env-SAMPLE .env
```

### 3. Add your credentials

Update `.env` with your valid cretantials for Petclinic application:

```ini
EMAIL='your.email@example.com'
PASSWORD='your-password'
```

> **Note:** `.env` is listed in `.gitignore`, so it is never version controlled. Your credentials stay on your
> local machine and are never pushed to the repository.

### 4. Verify the setup

Run the sample test in `tests/homework.spec.ts`:

```bash
npx playwright test
```

If the test passes, the framework is ready to use.

---

## Running Tests

| Command | Description |
| --- | --- |
| `npx playwright test` | Run all tests |
| `npx playwright test --ui` | Run tests in UI mode |
| `npx playwright test --headed` | Run tests in a visible browser |
| `npx playwright test --debug` | Run tests with the Playwright Inspector |
| `npx playwright test tests/homework.spec.ts` | Run a single spec file |
| `npx playwright show-report` | Open the last HTML report |

---

## Project Structure

```
.
├── .auth/
│   ├── auth-setup.ts      # Global setup: signs in and saves the browser session
│   └── user.json          # Generated storage state (git-ignored)
├── tests/
│   └── homework.spec.ts   # Sample test — add your assignment tests here
├── .env                   # Your credentials (git-ignored)
├── .env-SAMPLE            # Credentials template
├── playwright.config.ts   # Playwright configuration
└── tsconfig.json          # TypeScript configuration
```

---

## How Authentication Works

Signing in before every test is slow, so this framework authenticates **once** per run:

1. `playwright.config.ts` points `globalSetup` at `.auth/auth-setup.ts`.
2. Before any test runs, that script launches a browser, logs in with the credentials from `.env`, and saves
   the authenticated session to `.auth/user.json`.
3. It also captures the API access token and exposes it as `process.env.ACCESS_TOKEN`, which the config sends
   as an `Authorization` header for API requests.
4. Every test then starts already logged in via the `storageState` option — no login steps needed in your specs.

---

## Application Under Test

Tests run against the Bondar Academy PetClinic demo application:

**https://petclinic.bondaracademy.com**

The base URL is configured in `playwright.config.ts`, so use relative paths in your tests:

```ts
await page.goto('/')
```

---

## Learn More

- [Playwright UI Testing Mastery program](https://bondaracademy.com/programs/playwright-ui-testing-mastery)
- [Bondar Academy](https://bondaracademy.com)
- [Playwright documentation](https://playwright.dev)
