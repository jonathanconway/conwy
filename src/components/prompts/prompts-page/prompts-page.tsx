import { promptsRoute } from "@/app/routes";
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
  ContentAnchorLinkAndInfo,
  ContentAnchorsMap,
  ContentMap,
  Prompt as Prompt_,
  Slug,
  reduceContentsAnchorLinkAndInfos,
} from "@/framework";

import contentAnchorsMap_ from "../../../../builder-out/content-anchors.json";

interface PromptsPageProps {
  readonly prompts: readonly Prompt_[];

  readonly promptsContentAnchorLinkAndInfos: Record<
    Slug,
    readonly ContentAnchorLinkAndInfo[]
  >;
}

export function PromptsPage(props: PromptsPageProps) {
  const { prompts, promptsContentAnchorLinkAndInfos } = props;
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
