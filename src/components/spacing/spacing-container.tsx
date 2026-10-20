import { ReactNode } from "react";

import { rems } from "@/framework/css";

import { SpacingSize } from "./spacing-sizes";
import { spacingRems } from "./spacing.consts";
import * as spacing from "./spacing.css";

type SpacingContainerProps = {
  readonly children: ReactNode;
} & SpacingContainerSizeProps;

interface SpacingContainerSizeProps {
  readonly paddingTop?: SpacingSize;
  readonly paddingRight?: SpacingSize;
  readonly paddingBottom?: SpacingSize;
  readonly paddingLeft?: SpacingSize;
  readonly paddingInline?: SpacingSize;
  readonly paddingBlock?: SpacingSize;

  readonly marginTop?: SpacingSize;
  readonly marginRight?: SpacingSize;
  readonly marginBottom?: SpacingSize;
  readonly marginLeft?: SpacingSize;
  readonly marginInline?: SpacingSize;
  readonly marginBlock?: SpacingSize;
}

export function SpacingContainer(props: SpacingContainerProps) {
  const spacingContainerStyles = pickSpacingContainerStyles(props);

  return (
    <div className={spacing.spacingContainer} style={spacingContainerStyles}>
      {props.children}
    </div>
  );
}

type EntriesOf<T> = readonly [keyof T, T[keyof T]][];

function pickSpacingContainerStyles(props: SpacingContainerSizeProps) {
  return Object.fromEntries(
    (Object.entries(props) as EntriesOf<SpacingContainerSizeProps>)
      .filter(([, value]) => !!value)
      .map(([prop, value]) => [prop, rems(spacingRems[value!])]),
  );
}
