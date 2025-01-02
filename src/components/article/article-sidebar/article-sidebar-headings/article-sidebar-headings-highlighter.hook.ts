"use client";

import { map, memoize } from "lodash";
import { useCallback, useEffect, useState } from "react";

import { isClient, isNotNil, querySelector } from "@/framework/client";

import { ArticleHeading } from "../../article-headings";

function getIsElementInViewport(el?: Element | null) {
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
): readonly Element[] {
  if (!isClient) {
    return [];
  }

  const articleHeadingElements = articleHeadingIds
    .map((id) => document.getElementById(id))
    .filter(isNotNil);

  const articleTitleElement = querySelector("h2")!;

  return [articleTitleElement, ...articleHeadingElements];
}

const getArticleHeadingElementsMemoized = memoize(getArticleHeadingElements);

function getActiveElementInViewport(articleElements: readonly Element[]) {
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

  const [selectedHeadingId, setSelectedHeadingId] = useState("top");

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

  const handleMount = () => {
    if (window.location.hash) {
      const headingElementMatchingHash = document.querySelector(
        window.location.hash,
      );
      if (headingElementMatchingHash) {
        setSelectedHeadingId(window.location.hash.replace("#", ""));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleMount();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    selectedHeadingId,
  };
}
