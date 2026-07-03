import { Heading, LinkHeading } from "../../heading";
import { Link } from "../../link";
import { MdxContainer } from "../../mdx";
import { Stack } from "../../stack";

import { PromptProps } from "./prompt-props";

export function Prompt(props: PromptProps) {
  return (
    <Stack>
      <LinkHeading level={3} href={`/prompts/${props.prompt.meta.slug}`}>
        {props.prompt.meta.title}
      </LinkHeading>

      <MdxContainer>{props.prompt.content}</MdxContainer>
    </Stack>
  );
}
