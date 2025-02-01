# LoopQA Automation

Welcome to the LoopQA Demo Test Automation Repository! This repository contains all the necessary tools and scripts to automate the testing of the demo web application. Our goal is to ensure the highest quality and reliability of the demo application through comprehensive and efficient automated testing.

Documentation for Playwright can be found [here](https://playwright.dev/docs/intro).

## Dependencies

The following dependencies are required:

1. [Node.js](https://nodejs.org/en/) LTS
2. [Git](https://git-scm.com/download/win)

## Playwright Installation

Additional installation documentation for Playwright can be found [here](https://playwright.dev/docs/intro#installing-playwright) if needed.

1. Install Playwright and the dependencies by running the following command in the terminal window:

   ```
   npm install
   ```

## Browsers

If the browsers needed for testing are not already installed on the machine in the C:\Users\your.name\AppData\Local\ms-playwright folder, you may need to run the command below in order to install the necessary browsers.

To install browsers:

```
npm init playwright@latest
```

## Configuring Test Users

Update the username and password in the playwright.config.ts file. Use the credentials for the automation user. If these credentials are needed, contact QA:

```
const useremail = "<<useremail>>";
const userpassword = "<<userpassword>>";
```

## Running Tests

To run all tests with the default configurations, run the following command in the terminal:

```
npx playwright test
```

To run tests in headed mode:

```
npx playwright test --headed
```

To run tests with a particular environment:

```
npx playwright test --project="demo_env"
```

To run a specific test file:

```
npx playwright test webapplication.spec.ts --project="demo_env" --headed
npx playwright test mobileapplication.spec.ts --project="demo_env" --headed
```

To run a specific test by title:

```
npx playwright test -g "login"
```

To run a specific tests by tag:

```
npx playwright test --project="demo_env" --grep "@smoke"
```

To run tests in UI Mode:

```
npx playwright test --ui
```
