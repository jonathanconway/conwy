"use client";

import { Idea as Idea_ } from "@/framework/client";

import { MdxWrapper } from "../mdx";
import { Stack, StackDirections } from "../stack";

interface IdeaProps {
  readonly idea: Idea_;
}

export function Idea(props: IdeaProps) {
  return (
    <Stack direction={StackDirections.Column} gap={0.5}>
      <MdxWrapper>{props.idea.content}</MdxWrapper>
    </Stack>
  );
}
