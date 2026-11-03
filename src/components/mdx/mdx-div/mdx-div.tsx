"use client";

import { kebabCase } from "lodash";

import { SpacingContainer, SpacingSizes } from "../../spacing";

import { MdxDivImageSet } from "./mdx-div-image-set";
import { MdxDivLayoutGrid } from "./mdx-div-layout-grid";
import { MdxDivProps } from "./mdx-div-props";
import * as styles from "./mdx-div.css";

const ComponentAdapters = {
  MdxDivLayoutGrid,
  MdxDivImageSet,
} as const;

export function MdxDiv(props: MdxDivProps) {
  if (props.className) {
    for (const [componentAdapterName, ComponentAdapter] of Object.entries(
      ComponentAdapters,
    )) {
      const className = kebabCase(componentAdapterName.replace("MdxDiv", ""));

      if (props.className?.includes(className)) {
        return (
          <SpacingContainer marginTop={SpacingSizes.S}>
            {" "}
            <ComponentAdapter {...props} />
          </SpacingContainer>
        );
      }
    }
  }

  return <div className={styles.div} {...props} />;
}
