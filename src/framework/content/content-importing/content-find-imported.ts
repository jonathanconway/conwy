import { camelCase } from "lodash";

import { pascalCase } from "../../utils";
import { ContentBase } from "../content-base";
import { ContentMap } from "../content-map";
import { ContentType } from "../content-type/content-types";
import { MetaBase } from "../meta/meta-base";
import { Slug } from "../slug";

export function findImportedContent<
  TType extends ContentType = ContentType,
  TMetaExtensions extends object = object,
  TMeta extends MetaBase<TMetaExtensions> = MetaBase<TMetaExtensions>,
  TContent extends ContentBase<TType, TMeta, TMetaExtensions> = ContentBase<
    TType,
    TMeta,
    TMetaExtensions
  >,
>(contentMap: ContentMap<TContent>, type: ContentType, slug: Slug): TContent {
  const slugCamel = prefixWithUnderlineIfNumber(camelCase(slug));
  const contentTypePascal = pascalCase(type);
  const slugCamelLookup = `${slugCamel}${contentTypePascal}`;
  return contentMap[slugCamelLookup] as TContent;
}

function prefixWithUnderlineIfNumber(input: string) {
  if (isNaN(Number(input[0]))) {
    return input;
  }
  return `_${input}`;
}
