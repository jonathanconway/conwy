const { test, expect } = require('@playwright/test');

const {
  setupNunjucks,
  withStyles,
  renderMacro,
  generateSnapshotPath,
  encodeImage
} = require('../../testing/snapshot-test-utils.js');

test('article snapshot', async ({ page }) => {
  const nunjucks = setupNunjucks(__dirname);

  const model = {
    title: 'Title',
    date: '2021-01-01',
    imageUrl: encodeImage('/articles/mock-data/mock-data.jpg'),
    content: `
      <p>This is some content</p>

      <p class="article-blurb">
        Recent experiments with mock data reveal a surprisingly versatile tool that can boost developer productivity and enjoyment.
      </p>

      <p>Mock data, dummy data, fake data, test data, sample data.</p>
    `
  };

  const output = withStyles(renderMacro(nunjucks, 'article', 'article', model));

  await page.setContent(output);

  const path = generateSnapshotPath(__dirname, '001');
  await page.screenshot({ path });
});
