const { test, expect } = require('@playwright/test');
const fs = require('fs')

const {
  withStyles,
  generateSnapshotPath,
  encodeImage
} = require('../../testing/snapshot-test-utils.js');

test('intro snapshot', async ({ page }) => {
  const output = withStyles(`
    <div class="intro">
      <img class="intro-image" src="${encodeImage('/intro.jpg')}" />
    </div>
  `);

  await page.setContent(output);

  const path = generateSnapshotPath(__dirname, '001');
  await page.screenshot({ path });
});
