import { camelCase, kebabCase } from "lodash";
import { DateTime } from "luxon";

import { BookCategories, titleCase } from "@/framework";

import {
  fileAppendAndSortLines,
  fileWrite,
  getEnumName,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { BookGenParams, BookGenTemplateParams } from "./book.params";
import { bookGen } from "./book_.gen";
import { booksIndexGen } from "./books.index.gen";

export async function book(params: BookGenParams) {
  const { name, category, authors = [] } = params;

  const booksPath = `src/content/books`;

  const date = DateTime.now().toFormat("yyyy-MM-dd");

  const categoryEnumName = getEnumName(
    BookCategories,
    kebabCase(category?.toLowerCase()) ?? BookCategories.SoftwareDevelopment,
  );

  const templateParams: BookGenTemplateParams = {
    ...params,

    title: titleCase(name),
    nameRootObject: `${camelCase(name)}Book`,
    date,
    authors,
    categoryEnumName,
  };

  const bookPath = `${booksPath}/${name}.ts`;
  const bookGenOutput = bookGen(templateParams);
  fileWrite(bookPath, bookGenOutput);
  runPrettier(bookPath);

  const booksIndexPath = `${booksPath}/index.ts`;
  const bookIndexGenOutput = booksIndexGen(templateParams);
  fileAppendAndSortLines(booksIndexPath, bookIndexGenOutput);
  runPrettier(booksIndexPath);
}
