"use client";

import { ReactNode } from "react";

import { Stack, StackDirections, StackDistributions } from "@/components";

import { CONTENT_SIDEBAR_CONTAINER_ID } from "./content-sidebar-container.const";
import * as styles from "./content-sidebar-container.css";
import { useContentSidebarContainer } from "./content-sidebar-container.hook";

interface ContentSidebarContainer {
  readonly children?: ReactNode;
}

export function ContentSidebarContainer(props: ContentSidebarContainer) {
  const { isScrolledDown } = useContentSidebarContainer();

  return (
    <div
      className={isScrolledDown ? styles.scrolledDown : styles.notScrolledDown}
    >
      <Stack
        id={CONTENT_SIDEBAR_CONTAINER_ID}
        className={styles.innerStack}
        direction={StackDirections.Column}
        gap={2.5}
        distribution={StackDistributions.Flow}
      >
        {props.children}
      </Stack>
    </div>
  );
}
