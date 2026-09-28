"use client";

import { Prompt as Prompt_ } from "@/framework";
import { ContentAnchorLinkAndInfo } from "@/framework/client";

import { Prompt } from "../prompt/prompt";

interface PromptsListItemProps {
  readonly prompt: Prompt_;
  readonly promptContentAnchorLinkAndInfos: readonly ContentAnchorLinkAndInfo[];
}

export function PromptsListItem(props: PromptsListItemProps) {
  const { prompt, promptContentAnchorLinkAndInfos } = props;

  return (
    <Prompt
      prompt={prompt}
      promptContentAnchorLinkAndInfos={promptContentAnchorLinkAndInfos}
    />
  );
}
