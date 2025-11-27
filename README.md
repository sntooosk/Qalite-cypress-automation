# QALite Cypress E2E Automation

## Project Overview
This project is an end-to-end (E2E) test automation framework built using Cypress. It is designed to test web applications efficiently and reliably, ensuring high-quality software delivery.

## Folder Structure

The project follows the structure below:

```
.
├── browserstack.json          # Configuration for BrowserStack integration
├── commitlint.config.js       # Commit linting rules
├── cypress.config.js          # Cypress configuration file
├── package.json               # Project dependencies and scripts
├── cypress/
│   ├── e2e/
│   │   ├── features/          # Gherkin feature files
│   │   │   ├── Login.feature
│   │   │   ├── Organization.feature
│   │   │   └── Profile.feature
│   ├── fixtures/              # Test data (e.g., users.json)
│   ├── support/               # Custom commands, utilities, and page objects
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   ├── pages/
│   │   │   ├── BasePage.js
│   │   │   ├── Login/
│   │   │   │   ├── elements.js
│   │   │   │   └── index.js
│   │   │   ├── Organization/
│   │   │   │   ├── elements.js
│   │   │   │   └── index.js
│   │   │   ├── Profile/
│   │   │   │   ├── elements.js
│   │   │   │   └── index.js
│   │   ├── steps/
│   │   │   └── steps.js       # Step definitions for feature files
│   │   ├── utils/
│   │       └── generators.js  # Utility functions
```

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Cypress](https://www.cypress.io/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/quality-digital/qalite-cypress-e2e-automation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd qalite-cypress-e2e-automation
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run All Tests
To execute all tests, run:
```bash
npm run test
```

### Run Specific Tests
To run tests for a specific feature, use:
```bash
npx cypress run --spec "cypress/e2e/features/<feature-name>.feature"
```
Replace `<feature-name>` with the desired feature file name.

### Open Cypress Test Runner
To open the interactive Cypress Test Runner, run:
```bash
npx cypress open
```

## Writing Tests

1. Add your Gherkin feature files in the `cypress/e2e/features/` directory.
2. Implement step definitions in `cypress/support/steps/steps.js`.
3. Use page objects located in `cypress/support/pages/` to organize your code.

## Utilities

- **Custom Commands**: Defined in `cypress/support/commands.js`.
- **Test Data**: Stored in `cypress/fixtures/`.
- **Utility Functions**: Available in `cypress/support/utils/generators.js`.

## BrowserStack Integration

The project includes a `browserstack.json` file for running tests on BrowserStack. Configure your BrowserStack credentials and settings in this file.

## Commit Guidelines

Follow the commit message rules defined in `commitlint.config.js` to ensure consistent and meaningful commit messages.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy Testing! 🚀