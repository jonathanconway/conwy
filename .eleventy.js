const pluginSass = require("eleventy-plugin-sass");

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
    "svg"
  ]);

  eleventyConfig.addPlugin(pluginSass, {});
  
  addFilters(eleventyConfig);
};