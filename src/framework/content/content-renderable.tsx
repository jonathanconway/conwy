import { MDXContent } from "mdx/types";
import pluralize from "pluralize";
import { ReactNode } from "react";

import { Content } from "./content";
import { ContentType } from "./content-types";

export type ContentRenderable<
  TType extends ContentType,
  TMeta extends object,
  T extends Content<TType, TMeta>,
> = {
  [P in keyof T]: T[P] extends MDXContent ? ReactNode : T[P];
};

export async function getContentRenderable<
  TType extends ContentType,
  TMeta extends object,
  T extends Content<TType, TMeta>,
>(content: T): Promise<ContentRenderable<TType, TMeta, T>> {
  const entries = Object.entries(content);

  const entriesRenderable = [];

  for (const [key, value] of entries) {
    console.log("value.name", value.name);
    // console.log("value.name", value.name);
    if (value.name === "MDXContent") {
      const contentPath = `@/content/${pluralize(content.type)}/${content.slug}/${key}`;
      // const renderableValue = await import(
      //   contentPath
      // );
      console.log("contentPath", contentPath);
      // entriesRenderable.push([key, renderableValue]);
      entriesRenderable.push([key, <div key={key}></div>]);
    } else {
      entriesRenderable.push([key, value]);
    }
  }

  return Object.fromEntries(entriesRenderable) as ContentRenderable<
    TType,
    TMeta,
    T
  >;
}
