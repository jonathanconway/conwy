import { camelCase } from "lodash";

import { ContentType, MetaBase } from "../client";
import { pascalCase } from "../utils";

import { Content } from "./content";

export function importContentBySlug<
  TContent extends Content<ContentType, MetaBase>,
>(
  contents: Record<string, TContent>,
  contentType: TContent["type"],
  slug: string,
) {
  const slugCamel = prefixWithUnderlineIfNumber(camelCase(slug));
  const contentTypePascal = pascalCase(contentType);
  const slugCamelLookup = `${slugCamel}${contentTypePascal}`;
  return contents[slugCamelLookup];
}

function prefixWithUnderlineIfNumber(input: string) {
  if (isNaN(Number(input[0]))) {
    return input;
  }
  return `_${input}`;
}
