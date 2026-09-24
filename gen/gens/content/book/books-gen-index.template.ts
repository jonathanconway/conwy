import { BookGenTemplateParams } from "./book-gen-template-params";

export const booksIndexGen = ({ slug }: BookGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
