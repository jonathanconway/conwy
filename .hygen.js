const { basename, dirname, join } = require("path");
const { camelCase, chain, last, startCase, kebabCase } = require("lodash");

const ROOT_DIR = "./";

function dir() {
  return join(ROOT_DIR, dirname(last(process.argv)));
}

function name() {
  return basename(last(process.argv)).split(".")[0];
}

function namePartBranches() {
  return last(process.argv);
}

function namePartLeaf() {
  return namePartBranches().split("/").pop();
}

function nameCamel() {
  return camelCase(name()).replaceAll(" ", "");
}

function namePascal() {
  return startCase(name()).replaceAll(" ", "");
}

function nameUpper() {
  return chain(name()).snakeCase().value().toUpperCase()
}

function nameSentence() {
  const startCaseLower = startCase(name())
  return `${startCaseLower[0].toUpperCase()}${startCaseLower.substring(1)}`
}

function content() {
  const contentSwitchArgIndex = process.argv.indexOf("--content");
  if (contentSwitchArgIndex === -1) {
    return "";
  }

  const contentValueArg = process.argv[contentSwitchArgIndex + 1];
  if (contentValueArg) {
    return contentValueArg;
  }

  return "";
}

function contentName() {
  const contentValue = content();
  if (contentValue) {
    return kebabCase(contentValue).split("-").slice(0, 5).join("-");
  }

  return name();
}

function dateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const date = now.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${date}`;
}

//.hygen.js
module.exports = {
  templates: `${__dirname}/_templates`,
  helpers: {
    dir,
    name,
    nameCamel,
    namePartLeaf,
    namePartBranches,
    namePascal,
    nameSentence,
    nameUpper,
    content,
    contentName,
    dateString
  }
}