import { createPromptsPromptRoute, promptsRoute } from "@/app/routes";
import { ContentAnchorLinkAndInfo, Prompt as Prompt_ } from "@/framework";

import { Page } from "../../../page";
import { ResponsiveMdHalf } from "../../../responsive";
import { Prompt } from "../prompt";

interface PromptPageProps {
  readonly prompt: Prompt_;
  readonly promptContentAnchorLinkAndInfos: readonly ContentAnchorLinkAndInfo[];
}

export function PromptPage(props: PromptPageProps) {
  const { prompt, promptContentAnchorLinkAndInfos } = props;
  const promptRoute = createPromptsPromptRoute(prompt);

  return (
    <Page
      title={promptRoute.title}
      breadcrumbSegments={[promptsRoute, { title: promptRoute.title }]}
    >
      <ResponsiveMdHalf>
        <Prompt
          title={`Prompt: ${prompt.meta.title}`}
          prompt={prompt}
          promptContentAnchorLinkAndInfos={promptContentAnchorLinkAndInfos}
        />
      </ResponsiveMdHalf>
    </Page>
  );
}
