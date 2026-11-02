import { Metadata } from "next";

import { ToolPage } from "@/components";
import { site } from "@/content";
import * as toolsMap from "@/content/tools";
import { ContentTypes, NextPageProps, sentenceCase } from "@/framework";
import { findImportedContent } from "@/framework/server";

export default async function ToolsToolPage(props: NextPageProps) {
  const params = await props.params;

  const tool = findImportedContent(toolsMap, ContentTypes.Tool, params.slug);

  return <ToolPage tool={tool} />;
}

export async function generateStaticParams() {
  const allMetas = Object.values(toolsMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(
  props: NextPageProps,
): Promise<Metadata> {
  const params = await props.params;

  const tool = findImportedContent(toolsMap, ContentTypes.Tool, params.slug);
  const toolTitle = sentenceCase(tool.meta.slug).toLowerCase();

  const title = `${site.title} - uses - ${toolTitle}`;

  return {
    title,
  };
}
