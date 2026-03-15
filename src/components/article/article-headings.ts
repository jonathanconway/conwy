import { isFunction, kebabCase, truncate } from "lodash";
import {
  FunctionComponent,
  JSX,
  JSXElementConstructor,
  ReactElement,
} from "react";

import { Article as Article_ } from "@/framework/client";

import { MdxH2 } from "../mdx";

export interface ArticleHeading {
  readonly id: string;
  readonly title: string;
  readonly shortTitle?: string;
}

function getIsComponentType(
  element: ReactElement<unknown, string | JSXElementConstructor<unknown>>,
  componentType: FunctionComponent,
) {
  return (element.type as Function)?.name === componentType.name;
}

function byComponentType(componentType: FunctionComponent) {
  return (
    element: ReactElement<unknown, string | JSXElementConstructor<unknown>>,
  ) => getIsComponentType(element, componentType);
}

export function getArticleHeadings(
  article: Article_,
): readonly ArticleHeading[] {
  if (!isFunction(article.content.type)) {
    return [];
  }

  const headingElements = (article.content
    .type()
    ._owner?.props.article.content.type()
    ?.props.children.type({})
    ?.props.children.filter(byComponentType(MdxH2)) ?? []) as JSX.Element[];

  const headingTitles = headingElements.map((headingElement) =>
    headingElement?.props.children?.toString(),
  );

  const headingElementHeadings = headingElements.map(
    (_, headingElementIndex) => {
      const title = headingTitles[headingElementIndex];
      const id = kebabCase(title);
      const shortTitle = truncate(title, { length: 30 });

      return {
        title,
        id,
        shortTitle,
      };
    },
  );

  return [{ id: "top", title: "Intro" }, ...headingElementHeadings];
}
