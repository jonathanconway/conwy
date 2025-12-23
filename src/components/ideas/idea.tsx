"use client";

import { Idea as Idea_ } from "@/framework/client";

import { Fragment } from "../fragments";
import { Stack, StackDirections } from "../stack";

interface IdeaProps {
  readonly idea: Idea_;
}

export function Idea(props: IdeaProps) {
  return (
    <Stack direction={StackDirections.Column} gap={0.5}>
      <Fragment>{props.idea.content}</Fragment>
    </Stack>
  );
}
