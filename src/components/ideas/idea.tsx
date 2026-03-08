"use client";

import { Idea as Idea_ } from "@/framework/client";

import { MdxContainer } from "../mdx";
import { Stack, StackDirections } from "../stack";

interface IdeaProps {
  readonly idea: Idea_;
}

export function Idea(props: IdeaProps) {
  return (
    <Stack direction={StackDirections.Column} gap={0.5}>
      <MdxContainer>{props.idea.content}</MdxContainer>
    </Stack>
  );
}
