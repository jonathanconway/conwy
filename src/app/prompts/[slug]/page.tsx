import { Metadata } from "next";

import { createPromptsPromptRoute, promptsRoute } from "@/app/routes";
import { Page, Prompt, ResponsiveMdHalf } from "@/components";
import * as contentMap_ from "@/content";
import { site } from "@/content";
import * as promptsMap from "@/content/prompts";
import {
  ContentAnchorsMap,
  ContentMap,
  ContentTypes,
  reduceContentAnchorLinkAndInfos,
  sentenceCase,
} from "@/framework";
import { findImportedContent } from "@/framework/server";

import contentAnchorsMap_ from "../../../../builder-out/content-anchors.json";
import { PageProps } from "../../[slug]/types";

const contentAnchorsMap = contentAnchorsMap_ as ContentAnchorsMap;
const contentMap = contentMap_ as unknown as ContentMap;

export default async function PromptsPromptPage(props: PageProps) {
  const params = await props.params;

  const prompt = findImportedContent(
    promptsMap,
    ContentTypes.Prompt,
    params.slug,
  );

  const promptContentAnchorLinkAndInfos = reduceContentAnchorLinkAndInfos(
    prompt,
    contentMap,
    contentAnchorsMap,
  );

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

export async function generateStaticParams() {
  const allMetas = Object.values(promptsMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const prompt = findImportedContent(
    promptsMap,
    ContentTypes.Prompt,
    params.slug,
  );
  const promptTitle = sentenceCase(prompt.meta.slug).toLowerCase();

  const title = `${site.title} - prompt - ${promptTitle}`;

  return {
    title,
  };
}
