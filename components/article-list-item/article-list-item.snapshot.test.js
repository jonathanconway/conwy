const { test, expect } = require('@playwright/test');

const {
  setupNunjucks,
  withStyles,
  renderMacro,
  generateSnapshotPath
} = require('../../testing/snapshot-test-utils.js');

test('article-list-item snapshot', async ({ page }) => {
  const nunjucks = setupNunjucks(__dirname);

  const model = {
    url: 'url',
    data: {
      title: 'title',
      date: '2021-01-01'
    }
  };

  const output = withStyles(renderMacro(nunjucks, 'article-list-item', 'articleListItem', model));

  await page.setContent(output);

  const path = generateSnapshotPath(__dirname, '001');
  await page.screenshot({ path });
});
