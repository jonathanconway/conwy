import { camelCase } from "lodash";

import { pascalCase } from "../../utils";
import { Content } from "../content";
import { ContentType } from "../content-type/content-types";
import { MetaBase } from "../meta/meta-base";
import { Slug } from "../slug";

export function findImportedContent<
  TContent extends Content<ContentType, MetaBase>,
>(contents: Record<string, TContent>, type: ContentType, slug: Slug) {
  const slugCamel = prefixWithUnderlineIfNumber(camelCase(slug));
  const contentTypePascal = pascalCase(type);
  const slugCamelLookup = `${slugCamel}${contentTypePascal}`;
  return contents[slugCamelLookup];
}

function prefixWithUnderlineIfNumber(input: string) {
  if (isNaN(Number(input[0]))) {
    return input;
  }
  return `_${input}`;
}
