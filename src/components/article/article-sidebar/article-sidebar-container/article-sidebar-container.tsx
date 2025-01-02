"use client";

import { ReactNode } from "react";

import * as styles from "./article-sidebar-container.css";
import { useArticleSidebarContainer } from "./use-article-sidebar-container.hooks";

interface ArticleSidebarContainer {
  readonly children?: ReactNode;
}

export function ArticleSidebarContainer(props: ArticleSidebarContainer) {
  const { isScrolledDown } = useArticleSidebarContainer();

  return (
    <div
      className={isScrolledDown ? styles.scrolledDown : styles.notScrolledDown}
    >
      {props.children}
    </div>
  );
}
