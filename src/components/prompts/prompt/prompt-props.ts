import { ContentAnchorLinkAndInfo, Prompt } from "@/framework";

export interface PromptProps {
  readonly title?: string;
  readonly prompt: Prompt;
  readonly promptContentAnchorLinkAndInfos: readonly ContentAnchorLinkAndInfo[];
}
