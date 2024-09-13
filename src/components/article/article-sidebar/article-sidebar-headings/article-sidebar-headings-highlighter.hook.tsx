"use client";

import { map, memoize, throttle } from "lodash";
import { useEffect, useState } from "react";

import { isClient, isNotNil } from "@/framework/client";

import { ARTICLE_HEADING_INTRO } from "../../article-heading-intro";
import { ArticleHeading } from "../../article-headings";

function getIsElementInViewport(el?: HTMLElement | null) {
  if (!isClient) {
    return false;
  }

  if (!el?.getBoundingClientRect) {
    return false;
  }

  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function getArticleHeadingElements(
  articleHeadingIds: readonly string[],
): readonly HTMLElement[] {
  if (!isClient) {
    return [];
  }

  return articleHeadingIds
    .map((id) => document.getElementById(id))
    .filter(isNotNil);
}

const getArticleHeadingElementsMemoized = memoize(getArticleHeadingElements);

function getActiveElementInViewport(articleElements: readonly HTMLElement[]) {
  const elementsInViewport = articleElements.filter(getIsElementInViewport);
  const isLastElementInViewport = elementsInViewport?.includes(
    articleElements.slice(-1)[0],
  );

  if (isLastElementInViewport) {
    return articleElements.slice(-1)[0];
  } else {
    return elementsInViewport[0];
  }
}

export function useArticleSidebarHeadingsHighlighter(
  articleHeadings: readonly ArticleHeading[],
) {
  const articleHeadingIds = map(articleHeadings, "id");

  const [selectedHeadingId, setSelectedHeadingId] = useState(
    ARTICLE_HEADING_INTRO.id,
  );

  const handleScroll = () => {
    const articleElements =
      getArticleHeadingElementsMemoized(articleHeadingIds);

    const activeElementInViewport = getActiveElementInViewport(articleElements);

    const idInViewport = activeElementInViewport?.id?.replace(
      "-article-link",
      "",
    );

    if (idInViewport) {
      setSelectedHeadingId(idInViewport);
    }
  };

  useEffect(() => {
    handleScroll();

    document?.body?.addEventListener("scroll", throttle(handleScroll, 200));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    selectedHeadingId,
  };
}
