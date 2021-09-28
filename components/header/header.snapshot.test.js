const { test, expect } = require('@playwright/test');

const {
  setupNunjucks,
  withStyles,
  renderMacro,
  generateSnapshotPath
} = require('../../testing/snapshot-test-utils.js');

test('header snapshot', async ({ page }) => {
  const nunjucks = setupNunjucks(__dirname);

  const model = {
    tags: ['articles']
  };

  const output = withStyles(renderMacro(nunjucks, 'header', 'header', model));

  await page.setContent(output);

  const path = generateSnapshotPath(__dirname, '001');
  await page.screenshot({ path });
});
