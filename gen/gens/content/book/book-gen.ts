import { getGenSchemaValues } from "@/framework/server";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { bookGenIndexTemplate } from "./book-gen-index.template";
import { bookGenMetaTemplate } from "./book-gen-meta.template";
import { bookGenSchema } from "./book-gen-schema";
import { generateBookGenTemplateParams } from "./book-gen-template-params";
import { booksIndexGen } from "./books-gen-index.template";

export async function book() {
  const bookGenParams = await getGenSchemaValues(bookGenSchema);
  const bookGenTemplateParams = generateBookGenTemplateParams(bookGenParams);

  const booksPath = `src/content/books`;
  const bookPath = `${booksPath}/${bookGenTemplateParams.slug}`;

  folderWrite(bookPath);

  const bookMetaPath = `${bookPath}/meta.ts`;
  fileWrite(bookMetaPath, bookGenMetaTemplate(bookGenTemplateParams));
  await runPrettier(bookMetaPath);

  const bookIndexPath = `${bookPath}/index.ts`;
  fileWrite(bookIndexPath, bookGenIndexTemplate(bookGenTemplateParams));
  await runPrettier(bookIndexPath);

  const booksIndexPath = `${booksPath}/index.ts`;
  fileAppendAndSortLines(booksIndexPath, booksIndexGen(bookGenTemplateParams));
  await runPrettier(booksIndexPath);
}
