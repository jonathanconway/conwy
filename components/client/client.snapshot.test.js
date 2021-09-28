const { test, expect } = require('@playwright/test');

const {
  setupNunjucks,
  withStyles,
  renderMacro,
  generateSnapshotPath,
  setViewportSize,
  encodeImage
} = require('../../testing/snapshot-test-utils.js');

test('client snapshot', async ({ page }) => {
  const nunjucks = setupNunjucks(__dirname);

  const model = {
    data: {
      clientUrl: 'http://www.duckduckgo.com',
      clientName: 'DuckDuckGo',
      clientDates: 'Jan 2020 - Jan 2021',
      techs: ['javascript', 'css', 'typescript'],
      url: 'url',
      screencastUrl: encodeImage('/work/villa-plus/villa-plus-screencast.gif'),
      screencastAlt: 'Alt'
    },
    templateContent: '<p>This is <strong>bold</strong> text.',
  };

  const output = withStyles(renderMacro(nunjucks, 'client', 'client', model));

  await page.setContent(output);

  // Small
  await setViewportSize(page, 'small');
  await page.screenshot({ path: generateSnapshotPath(__dirname, '-mobile-001') });

  // Regular
  await setViewportSize(page, 'regular');
  await page.screenshot({ path: generateSnapshotPath(__dirname, '-desktop-001') });
});
