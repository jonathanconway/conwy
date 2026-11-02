import { Metadata } from "next";

import { createToolsToolRoute, toolsRoute } from "@/app/routes";
import { Page, ToolsListItem } from "@/components";
import { site } from "@/content";
import * as toolsMap from "@/content/tools";
import { ContentTypes, sentenceCase } from "@/framework";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function ToolsToolPage(props: PageProps) {
  const params = await props.params;

  const tool = findImportedContent(toolsMap, ContentTypes.Tool, params.slug);
  const toolRoute = createToolsToolRoute(tool);

  return (
    <Page
      title={toolRoute.title}
      breadcrumbSegments={[toolsRoute, { title: toolRoute.title }]}
    >
      <ToolsListItem tool={tool} />
    </Page>
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(toolsMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const tool = findImportedContent(toolsMap, ContentTypes.Tool, params.slug);
  const toolTitle = sentenceCase(tool.meta.slug).toLowerCase();

  const title = `${site.title} - uses - ${toolTitle}`;

  return {
    title,
  };
}
