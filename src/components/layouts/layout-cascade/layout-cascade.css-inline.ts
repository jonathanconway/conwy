import { ReactElement } from "react";

import { checkIsOdd } from "@/framework";

import { vars } from "../../theme";

import {
  CHILD_CASCADE_IMAGE_SIZE_PX,
  CHILD_CASCADE_SIZE_PX,
} from "./layout-cascade.consts";

interface ChildContainerProps {
  readonly children: readonly ReactElement[];
  readonly childIndex: number;
  readonly isSelected: boolean;
}

const IMAGE_CASCADE_CENTER = {
  left: CHILD_CASCADE_SIZE_PX.width / 2 - CHILD_CASCADE_IMAGE_SIZE_PX.width / 2,
  top:
    CHILD_CASCADE_SIZE_PX.height / 2 - CHILD_CASCADE_IMAGE_SIZE_PX.height / 2,
};

const IMAGE_CASCADE_OFFSET_FACTOR = 25;

export const childContainerPosition = ({
  children,
  childIndex,
}: ChildContainerProps) => {
  const isOnlyOneImage = children.length === 1;
  if (isOnlyOneImage) {
    return IMAGE_CASCADE_CENTER;
  }

  const isChildrenLengthOdd = checkIsOdd(children.length);
  const childIndexCenter = children.length / 2;

  // Odd
  if (isChildrenLengthOdd) {
    const isChildCenter = childIndex + 1 === Math.ceil(childIndexCenter);

    // Center
    if (isChildCenter) {
      return IMAGE_CASCADE_CENTER;
    }

    // Left/Top of Center
    else if (childIndex + 1 < childIndexCenter) {
      const childPositionOffset =
        (Math.floor(childIndexCenter) - childIndex) *
        IMAGE_CASCADE_OFFSET_FACTOR;

      return {
        left: IMAGE_CASCADE_CENTER.left - childPositionOffset,
        top: IMAGE_CASCADE_CENTER.top - childPositionOffset,
      };
    }

    // Right/Bottom of Center
    else if (childIndex + 1 > childIndexCenter) {
      const childPositionOffset =
        (childIndex + 1 - Math.ceil(childIndexCenter)) *
        IMAGE_CASCADE_OFFSET_FACTOR;

      return {
        left: IMAGE_CASCADE_CENTER.left + childPositionOffset,
        top: IMAGE_CASCADE_CENTER.top + childPositionOffset,
      };
    }
  }

  // Even
  else {
    // Left/Top of Center
    if (childIndex + 1 <= childIndexCenter) {
      const childPositionOffset =
        (childIndexCenter - childIndex) * IMAGE_CASCADE_OFFSET_FACTOR -
        IMAGE_CASCADE_OFFSET_FACTOR / 2;

      return {
        left: IMAGE_CASCADE_CENTER.left - childPositionOffset,
        top: IMAGE_CASCADE_CENTER.top - childPositionOffset,
      };
    }

    // Right/Bottom of Center
    else if (childIndex + 1 > childIndexCenter) {
      const childPositionOffset =
        (childIndex + 1 - childIndexCenter) * IMAGE_CASCADE_OFFSET_FACTOR -
        IMAGE_CASCADE_OFFSET_FACTOR / 2;

      return {
        left: IMAGE_CASCADE_CENTER.left + childPositionOffset,
        top: IMAGE_CASCADE_CENTER.top + childPositionOffset,
      };
    }
  }

  return IMAGE_CASCADE_CENTER;
};

const IMAGE_CASCADE_IMAGE_SIZE_CSS = {
  width: `${CHILD_CASCADE_IMAGE_SIZE_PX.width}px`,
  height: `${CHILD_CASCADE_IMAGE_SIZE_PX.height}px`,
};

export const childContainerBorder = (props: ChildContainerProps) => {
  const { isSelected } = props;

  return {
    borderColor: isSelected ? vars.link.hover.text.color : undefined,
  };
};

export const childContainerZIndex = (props: ChildContainerProps) => {
  const { isSelected } = props;

  return {
    zIndex: isSelected
      ? props.children.length + 1
      : props.children.length - props.childIndex,
  };
};

export const childContainer = (props: ChildContainerProps) => {
  return {
    ...childContainerPosition(props),
    ...IMAGE_CASCADE_IMAGE_SIZE_CSS,
    ...childContainerBorder(props),
    ...childContainerZIndex(props),
  };
};
