import {
  ContentAnchorLinkAndInfo,
  Prompt as Prompt_,
  Slug,
} from "@/framework/content";

import { Stack, StackDirections } from "../../stack";
import { Prompt } from "../prompt";

interface PromptsListProps {
  readonly prompts: readonly Prompt_[];
  readonly promptsContentAnchorLinkAndInfos: Record<
    Slug,
    readonly ContentAnchorLinkAndInfo[]
  >;
}

export function PromptsList(props: PromptsListProps) {
  const { prompts, promptsContentAnchorLinkAndInfos } = props;

  return (
    <Stack direction={StackDirections.Column} gap={0.5}>
      {prompts.map((prompt) => (
        <Prompt
          key={prompt.meta.slug}
          prompt={prompt}
          promptContentAnchorLinkAndInfos={
            promptsContentAnchorLinkAndInfos[prompt.meta.slug]
          }
        />
      ))}
    </Stack>
  );
}
