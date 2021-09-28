const nunjucks = require("nunjucks");
const fs = require("fs");

const addFilters = require("../../.eleventy.filters.js");

const environment = nunjucks.configure({ autoescape: true });

const templateName = "article-list-item";
const templateFilename = `./components/${templateName}/${templateName}.njk`;
const template = fs.readFileSync(templateFilename, "utf8");

const mockArticle = {
  url: "url",
  data: {
    title: "title",
    date: "2021-01-01",
    blurb: "blurb",
  },
};

const mockArticleHTML = `
  <div class="article-list-item">
    <h3 class="article-list-item-title"><a href="url">title</a></h3>
    <small class="article-list-item-date">01/01/2021</small> • 
    <small class="article-list-item-blurb">blurb</small>
  </div>
`.trim();

const macroCall = `{{ articleListItem( mockArticle ) }}`;

const inputString = `${template} ${macroCall}`;

addFilters(environment);

describe(templateName, () => {
  it("renders correctly", () => {
    const output = nunjucks.renderString(inputString, { mockArticle });
    expect(output).toEqual(mockArticleHTML);
  });
});
