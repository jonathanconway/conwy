"use client";

import { kebabCase, memoize } from "lodash";
import { useEffect, useState } from "react";

import { isClient, isNotNil, querySelector, waitFor } from "@/framework/client";

import { CONTENT_PAGE_SIDEBAR_HEADING_ID_PREFIX } from "./content-page-sidebar-headings.const";

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

function getHeadingElements(headingIds: readonly string[]): readonly Element[] {
  if (!isClient) {
    return [];
  }

  const headingElements = headingIds
    .map((id) => document.getElementById(id))
    .filter(isNotNil);

  const articleTitleElement = querySelector("h2")!;

  return [articleTitleElement, ...headingElements];
}

const getHeadingElementsMemoized = memoize(getHeadingElements);

function getActiveElementInViewport(headingElements: readonly Element[]) {
  const elementsInViewport = headingElements.filter(getIsElementInViewport);
  const isLastElementInViewport = elementsInViewport?.includes(
    headingElements.slice(-1)[0],
  );

  if (isLastElementInViewport) {
    return headingElements.slice(-1)[0];
  } else {
    return elementsInViewport[0];
  }
}

export function useContentPageSidebarHeadingsHighlighter(
  sidebarHeadings: readonly string[],
) {
  const checklistHeadingIds = sidebarHeadings.map(kebabCase);

  const [selectedHeadingId, setSelectedHeadingId] = useState("top");

  function highlightScrolledToHeading() {
    const elements = getHeadingElementsMemoized(checklistHeadingIds);
    const activeElementInViewport = getActiveElementInViewport(elements);
    const headingId = activeElementInViewport?.id?.replace("-heading-link", "");
    scrollToSidebarHeading(headingId);
    setSelectedHeadingId(() => headingId);
  }

  useEffect(function mountEffect() {
    window.addEventListener("scroll", highlightScrolledToHeading);

    const headingId = window.location.hash.replace("#", "");
    scrollToSidebarHeading(headingId);
    setSelectedHeadingId(() => headingId);

    return () => {
      window.removeEventListener("scroll", highlightScrolledToHeading);
    };
  }, []);

  return {
    selectedHeadingId,
  };
}

function scrollToSidebarHeading(headingId: string) {
  const newSelectedSidebarHeadingEl = document.getElementById(
    `${CONTENT_PAGE_SIDEBAR_HEADING_ID_PREFIX}-${headingId}`,
  );
  if (newSelectedSidebarHeadingEl) {
    newSelectedSidebarHeadingEl.scrollIntoView({
      behavior: "smooth",
    });
  }
}
