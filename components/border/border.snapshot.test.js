const { test, expect } = require('@playwright/test');

const {
  setupNunjucks,
  withStyles,
  renderMacro,
  generateSnapshotPath
} = require('../../testing/snapshot-test-utils.js');

test('border snapshot', async ({ page }) => {
  const nunjucks = setupNunjucks(__dirname);

  const output = withStyles(renderMacro(nunjucks, 'border', 'border'));

  await page.setContent(output);

  const path = generateSnapshotPath(__dirname, '001');
  await page.screenshot({ path });
});
