const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: true,
    // Headless Chrome stalls on Heroku's HTTP/2, so the login page never finishes loading.
    launchOptions: {
      args: ['--disable-http2'],
    },
  },
});
