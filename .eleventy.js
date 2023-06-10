const pluginRss = require("@11ty/eleventy-plugin-rss");

const addFilters = require("./.eleventy.filters.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "js",
    "njk",
    "css",
    "ttf",
    "otf",
    "ico",
    "gif",
    "png",
    "jpg",
    "svg",
  ]);

  addFilters(eleventyConfig);

  eleventyConfig.addPlugin(pluginRss);
};
