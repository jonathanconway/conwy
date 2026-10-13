import { BookGenTemplateParams } from "./book-gen-template-params";

export const booksGenIndexTemplate = ({ slug }: BookGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
