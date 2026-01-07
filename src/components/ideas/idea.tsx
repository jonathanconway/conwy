"use client";

import { Idea as Idea_ } from "@/framework/client";

import { Stack, StackDirections } from "../stack";

interface IdeaProps {
  readonly idea: Idea_;
}

export function Idea(props: IdeaProps) {
  return (
    <Stack direction={StackDirections.Column} gap={0.5}>
      {props.idea.content}
    </Stack>
  );
}
