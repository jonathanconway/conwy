import { Metadata } from "next";

import { PromptPage } from "@/components";
import * as contentMap_ from "@/content";
import { site } from "@/content";
import * as promptsMap from "@/content/prompts";
import {
  ContentAnchorsMap,
  ContentMap,
  ContentTypes,
  NextPageProps,
  reduceContentAnchorLinkAndInfos,
  sentenceCase,
} from "@/framework";
import { findImportedContent } from "@/framework/server";

import contentAnchorsMap_ from "../../../../builder-out/content-anchors.json";

const contentAnchorsMap = contentAnchorsMap_ as ContentAnchorsMap;
const contentMap = contentMap_ as unknown as ContentMap;

export default async function PromptsPromptPage(props: NextPageProps) {
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

  return (
    <PromptPage
      prompt={prompt}
      promptContentAnchorLinkAndInfos={promptContentAnchorLinkAndInfos}
    />
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(promptsMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(
  props: NextPageProps,
): Promise<Metadata> {
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
