import { StoryBox } from "../../story";

import { LayoutCascadeProps } from "./layout-cascade-props";

export function createLayoutCascadePropsMock(): LayoutCascadeProps {
  const children = [
    <StoryBox key="one">one</StoryBox>,
    <StoryBox key="two">two</StoryBox>,
    <StoryBox key="three">three</StoryBox>,
  ];
  return {
    children,
    frontChild: children[0],
  };
}
