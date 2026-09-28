import {
  ContentAnchorLinkAndInfo,
  Prompt as Prompt_,
  Slug,
} from "@/framework/content";

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
    <>
      {prompts.map((prompt) => (
        <Prompt
          key={prompt.meta.slug}
          prompt={prompt}
          promptContentAnchorLinkAndInfos={
            promptsContentAnchorLinkAndInfos[prompt.meta.slug]
          }
        />
      ))}
    </>
  );
}
