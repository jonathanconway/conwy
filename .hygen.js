const { basename, dirname, join } = require("path");
const { camelCase, chain, last, startCase, kebabCase, trim } = require("lodash");

const ROOT_DIR = "./";

function dir() {
  return join(ROOT_DIR, dirname(last(process.argv)));
}

function name() {
  return basename(process.argv[4]).split(".")[0];
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
  const startCaseLower = startCase(name()).toLowerCase();
  return `${startCaseLower[0].toUpperCase()}${startCaseLower.substring(1)}`;
}

function nameStart() {
  return startCase(name());
}

function switchValue(switchName) {
  const contentSwitchArgIndex = process.argv.indexOf(`--${switchName}`);
  if (contentSwitchArgIndex === -1) {
    return "";
  }
  
  const contentValueArg = process.argv[contentSwitchArgIndex + 1];
  if (contentValueArg) {
    return contentValueArg;
  }
  
  return "";
}

function content() {
  return switchValue("content");
}

function contentName() {
  const contentValue = content();
  if (contentValue) {
    return kebabCase(contentValue).split("-").slice(0, 5).join("-");
  }

  return name();
}

function author() {
  return switchValue("author");
}

function url() {
  return switchValue("url");  
}

function status() {
  return switchValue("status") || "Listed";
}

function title() {
  return switchValue("title") || nameStart();
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
    nameStart,
    nameUpper,
    content,
    contentName,
    dateString,
    switchValue,
    author,
    url,
    status,
    title
  }
}