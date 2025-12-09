require('dotenv').config()
const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

const buildCredentials = () => ({
  admin: {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  },
  user: {
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD,
  },
})

module.exports = defineConfig({
  video: true,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  defaultCommandTimeout: 120000,
  pageLoadTimeout: 180000,
  env: buildCredentials(),
  e2e: {
    baseUrl: 'https://qa-lite.vercel.app',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    setupNodeEvents(on) {
      on('file:preprocessor', cucumber())
    },
  },
})
