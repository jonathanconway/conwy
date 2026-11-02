import {
  MdxContainer,
  Page,
  PromptsList,
  ResponsiveMdHalf,
} from "@/components";
import * as contentMap_ from "@/content";
import { promptsFragment, site } from "@/content";
import * as promptsMap from "@/content/prompts";
import {
  ContentAnchorsMap,
  ContentMap,
  Prompt as Prompt_,
  reduceContentsAnchorLinkAndInfos,
} from "@/framework";

import contentAnchorsMap_ from "../../../builder-out/content-anchors.json";
import { promptsRoute } from "../routes";

const contentAnchorsMap = contentAnchorsMap_ as ContentAnchorsMap;
const contentMap = contentMap_ as unknown as ContentMap;
const prompts = Object.values(promptsMap) as readonly Prompt_[];

const promptsContentAnchorLinkAndInfos = reduceContentsAnchorLinkAndInfos(
  prompts,
  contentMap,
  contentAnchorsMap,
);

export default function PromptsPage() {
  return (
    <Page title={promptsRoute.title}>
      <ResponsiveMdHalf>
        <MdxContainer>{promptsFragment.content}</MdxContainer>
      </ResponsiveMdHalf>

      <ResponsiveMdHalf>
        <PromptsList
          prompts={prompts}
          promptsContentAnchorLinkAndInfos={promptsContentAnchorLinkAndInfos}
        />
      </ResponsiveMdHalf>
    </Page>
  );
}

export const metadata = {
  title: `${site.title} - prompts`,
};
