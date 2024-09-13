const { basename, dirname, join } = require("path");
const { camelCase, chain, last, startCase } = require("lodash");

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
  }
}