import { RedirectGenParams } from "./redirect-gen-params";

export const redirectsGenIndexTemplate = ({ slug, url }: RedirectGenParams) =>
  `
  "${slug}": "${url}",
`.trim();
