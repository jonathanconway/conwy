import { kebabCase } from "lodash";
import { FunctionComponent, JSXElementConstructor, ReactElement } from "react";

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

function getNextChildOfTypeAndNotType(
  children: readonly ReactElement[],
  fromElement: ReactElement,
  componentType: FunctionComponent,
) {
  const nextChildren = children.slice(children.indexOf(fromElement) + 1);

  return nextChildren.find((child) => getIsComponentType(child, componentType));
}

export function getArticleHeadings(
  article: Article_,
): readonly ArticleHeading[] {
  const content = article.content;
  const children: readonly ReactElement[] = content?.props?.children ?? [];

  const headingElements = children.filter(byComponentType(MdxH2));

  const headingTitles = headingElements.map((headingElement) =>
    (headingElement.props as any)?.children?.toString(),
  );

  const headingShortTitles = headingElements.map((headingElement) => {
    const nextChild = getNextChildOfTypeAndNotType(
      children,
      headingElement,
      MdxH2,
    );

    if (!nextChild) {
      return undefined;
    }

    return undefined;
  });

  const headingElementHeadings = headingElements.map(
    (_, headingElementIndex) => {
      const title = headingTitles[headingElementIndex];
      const id = kebabCase(title);
      const shortTitle = headingShortTitles[headingElementIndex];

      return {
        title,
        id,
        shortTitle,
      };
    },
  );

  return [{ id: "top", title: "Intro" }, ...headingElementHeadings];
}
