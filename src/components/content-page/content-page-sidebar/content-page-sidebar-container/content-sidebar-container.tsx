"use client";

import { ReactNode } from "react";

import { Stack, StackDirections, StackDistributions } from "@/components";

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
        direction={StackDirections.Column}
        gap={2.5}
        distribution={StackDistributions.Flow}
      >
        {props.children}
      </Stack>
    </div>
  );
}
