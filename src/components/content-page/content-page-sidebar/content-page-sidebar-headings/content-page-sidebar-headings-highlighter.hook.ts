"use client";

import { kebabCase, memoize } from "lodash";
import { useEffect, useState } from "react";

import { isClient, isNotNil, querySelector } from "@/framework/client";

import { CONTENT_PAGE_SIDEBAR_HEADING_ID_PREFIX } from "./content-page-sidebar-headings.const";

function getHeadingElements(
  headingIds: readonly string[],
): readonly HTMLElement[] {
  if (!isClient) {
    return [];
  }

  const headingElementsByIds = headingIds
    .map((id) => document.getElementById(id))
    .filter(isNotNil);

  const headingElementTitle = Array.from(
    document.getElementsByTagName("H2"),
  )[0] as HTMLElement;

  const headingElements = [headingElementTitle, ...headingElementsByIds];

  return headingElements;
}

function getHeadingElementInViewport(headingElements: readonly HTMLElement[]) {
  const htmlElement = document.querySelector("html")!;
  const viewportScrollTop = htmlElement.scrollTop;

  const headingElementsAndOffsets = headingElements.map(
    (headingElement, headingElementIndex) => ({
      headingElement,
      offsetTop: headingElement.offsetTop,
      offsetBottom:
        headingElements[headingElementIndex + 1]?.offsetTop ??
        window.document.body.offsetHeight,
    }),
  );

  return headingElementsAndOffsets.findLast(
    ({ headingElement, offsetTop, offsetBottom }) =>
      offsetTop <= viewportScrollTop + 200 && offsetBottom > viewportScrollTop,
  )?.headingElement;
}

const getHeadingElementsMemoized = memoize(getHeadingElements);

export function useContentPageSidebarHeadingsHighlighter(
  sidebarHeadings: readonly string[],
) {
  const checklistHeadingIds = sidebarHeadings.map(kebabCase);

  const [selectedHeadingId, setSelectedHeadingId] = useState("top");

  function highlightScrolledToHeading() {
    const headingElements = getHeadingElementsMemoized(checklistHeadingIds);
    const headingElementInViewport =
      getHeadingElementInViewport(headingElements) ?? headingElements[0];

    const headingId = headingElementInViewport?.id?.replace(
      "-heading-link",
      "",
    );
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
    newSelectedSidebarHeadingEl.setAttribute("tabindex", "0");
    newSelectedSidebarHeadingEl.focus();
    newSelectedSidebarHeadingEl.removeAttribute("tabindex");
  }
}
