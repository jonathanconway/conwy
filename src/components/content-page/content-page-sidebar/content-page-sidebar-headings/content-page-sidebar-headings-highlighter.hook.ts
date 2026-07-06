"use client";

import { kebabCase, memoize } from "lodash";
import { useEffect, useState } from "react";

import { isClient, isNotNil, querySelector, waitFor } from "@/framework/client";

import { CONTENT_SIDEBAR_CONTAINER_ID } from "../content-page-sidebar-container/content-sidebar-container.const";

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

  function handleScroll() {
    const elements = getHeadingElementsMemoized(checklistHeadingIds);

    const activeElementInViewport = getActiveElementInViewport(elements);

    const idInViewport = activeElementInViewport?.id?.replace(
      "-heading-link",
      "",
    );

    if (idInViewport) {
      setSelectedHeadingId(idInViewport);
    }
  }

  async function handleMount() {
    if (window.location.hash) {
      const headingElementMatchingHash = document.querySelector(
        window.location.hash,
      );
      if (headingElementMatchingHash) {
        const newSelectedHeadingId = window.location.hash.replace("#", "");

        setSelectedHeadingId(newSelectedHeadingId);
        scrollToNewSelectedHeading(newSelectedHeadingId);
      }
    }
  }

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

async function scrollToNewSelectedHeading(newSelectedHeadingId: string) {
  await waitFor(1000);

  const newSelectedHeadingEl = document.getElementById(
    `${CONTENT_PAGE_SIDEBAR_HEADING_ID_PREFIX}-${newSelectedHeadingId}`,
  );
  if (newSelectedHeadingEl) {
    newSelectedHeadingEl.scrollIntoView({
      behavior: "smooth",
    });

    await waitFor();
    const contentSidebarContainerEl = document.getElementById(
      CONTENT_SIDEBAR_CONTAINER_ID,
    );
    if (contentSidebarContainerEl) {
      contentSidebarContainerEl.scrollTo({
        left: 0,
        top: contentSidebarContainerEl.scrollTop + 30,
        behavior: "smooth",
      });
    }
  }
}
