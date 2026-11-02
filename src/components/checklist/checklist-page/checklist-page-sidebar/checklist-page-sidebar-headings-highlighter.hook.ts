"use client";

import { kebabCase, memoize } from "lodash";
import { useEffect, useState } from "react";

import { checkIsNotNil } from "@/framework";
import { isClient, querySelector } from "@/framework/client";

import { SCROLL_TO_TOP_ANCHOR_ID } from "../../../scroll-to-top";

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
    .filter(checkIsNotNil);

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

export function useChecklistPageSidebarHeadingsHighlighter(
  sidebarHeadings: readonly string[],
) {
  const checklistHeadingIds = sidebarHeadings.map(kebabCase);

  const [selectedHeadingId, setSelectedHeadingId] = useState(
    SCROLL_TO_TOP_ANCHOR_ID,
  );

  const handleScroll = () => {
    const elements = getHeadingElementsMemoized(checklistHeadingIds);

    const activeElementInViewport = getActiveElementInViewport(elements);

    const idInViewport = activeElementInViewport?.id?.replace(
      "-heading-link",
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
