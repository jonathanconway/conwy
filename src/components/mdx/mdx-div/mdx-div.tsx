"use client";

import { SpacingContainer, SpacingSizes } from "../../spacing";

import { MdxDivLayoutGrid } from "./mdx-div-layout-grid";
import { MdxDivProps } from "./mdx-div-props";
import * as styles from "./mdx-div.css";

export function MdxDiv(props: MdxDivProps) {
  if (props.className?.includes("layout-grid")) {
    return (
      <SpacingContainer marginTop={SpacingSizes.S}>
        {" "}
        <MdxDivLayoutGrid {...props} />
      </SpacingContainer>
    );
  }

  return <div className={styles.div} {...props} />;
}
