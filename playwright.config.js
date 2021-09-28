// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: true,
    viewport: { width: 800, height: 600 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  testMatch: '*.*(snapshot.test)\.js'
};

module.exports = config;