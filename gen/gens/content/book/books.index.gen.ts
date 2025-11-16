import { BookGenTemplateParams } from "./book.params";

export const booksIndexGen = ({ name }: BookGenTemplateParams) =>
  `

export * from "./${name}";

`.trim();
