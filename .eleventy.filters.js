const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("readablePostDate", (dateObj) => (
    DateTime.fromJSDate(new Date()).toFormat('dd/MM/yyyy')
  ));
};
