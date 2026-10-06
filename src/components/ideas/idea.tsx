"use client";

import { Idea as Idea_ } from "@/framework/client";

import { LinkHeading } from "../heading";
import { MdxContainer } from "../mdx";
import { Stack, StackDirections } from "../stack";

interface IdeaProps {
  readonly idea: Idea_;
}

export function Idea(props: IdeaProps) {
  return (
    <Stack direction={StackDirections.Column} gap={0.5}>
      <LinkHeading level={3} href={`/prompts/${props.idea.meta.slug}`}>
        {props.idea.meta.title}
      </LinkHeading>

      <MdxContainer>{props.idea.content}</MdxContainer>
    </Stack>
  );
}
