const fs = require("fs");
const nunjucks = require("nunjucks");

function setupNunjucks(rootPath) {
  const addFilters = require("../.eleventy.filters.js");

  function MyLoader(opts) {}

  MyLoader.prototype.getSource = function (name) {
    const path = rootPath + "/" + name;
    const src = fs.readFileSync(path, "utf8");

    return {
      src,
      path,
    };
  };

  const environment = new nunjucks.Environment(new MyLoader(), {
    autoescape: true,
  });

  addFilters(environment);

  return environment;
}
exports.setupNunjucks = setupNunjucks;

function getTemplate(templateName) {
  const templateFilename = `./components/${templateName}/${templateName}.njk`;
  const template = fs.readFileSync(templateFilename, "utf8");
  return template;
}
exports.getTemplate = getTemplate;

function renderMacro(environment, templateName, macroName, model) {
  const template = getTemplate(templateName);
  const macroCall = `{{ ${macroName}( model ) }}`;
  const inputString = `${template} ${macroCall}`;
  const output = environment.renderString(inputString, { model });
  const outputWrapped = `<div id="test-container">${output}</div>`;
  return outputWrapped;
}
exports.renderMacro = renderMacro;

function renderStyles() {
  const path = process.cwd() + "/css/index.css";
  const cssOutput = fs.readFileSync(path, "utf8");
  return cssOutput;
}
exports.renderStyles = renderStyles;

function withStyles(output) {
  const outputWithStyles = `<style>${renderStyles()}</style>${output}`;
  return outputWithStyles;
}
exports.withStyles = withStyles;

function generateSnapshotPath(dirname, suffix) {
  const path =
    dirname +
    "/snapshots/" +
    dirname.split("/").slice(-1)[0] +
    "-" +
    suffix +
    ".png";
  return path;
}
exports.generateSnapshotPath = generateSnapshotPath;

function encodeImage(imagePath) {
  const relativeImagePath = imagePath.replace("/", "");
  const imageFileBuffer = fs.readFileSync(relativeImagePath);
  const imageContentsBase64 = imageFileBuffer.toString("base64");
  const encodedImage = "data:image/gif;base64," + imageContentsBase64;
  return encodedImage;
}
exports.encodeImage = encodeImage;

async function setViewportSize(page, size) {
  switch (size) {
    case "small":
      return page.setViewportSize({ width: 200, height: 350 });
    case "regular":
      return page.setViewportSize({ width: 800, height: 600 });
  }
}
exports.setViewportSize = setViewportSize;
