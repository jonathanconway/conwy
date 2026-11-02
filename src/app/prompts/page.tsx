import { PromptsPage } from "@/components";
import * as contentMap_ from "@/content";
import { site } from "@/content";
import * as promptsMap from "@/content/prompts";
import {
  ContentAnchorsMap,
  ContentMap,
  Prompt as Prompt_,
  reduceContentsAnchorLinkAndInfos,
} from "@/framework";

import contentAnchorsMap_ from "../../../builder-out/content-anchors.json";

const contentAnchorsMap = contentAnchorsMap_ as ContentAnchorsMap;
const contentMap = contentMap_ as unknown as ContentMap;
const prompts = Object.values(promptsMap) as readonly Prompt_[];

const promptsContentAnchorLinkAndInfos = reduceContentsAnchorLinkAndInfos(
  prompts,
  contentMap,
  contentAnchorsMap,
);

export default function PromptsPage_() {
  return (
    <PromptsPage
      prompts={prompts}
      promptsContentAnchorLinkAndInfos={promptsContentAnchorLinkAndInfos}
    />
  );
}

export const metadata = {
  title: `${site.title} - prompts`,
};
