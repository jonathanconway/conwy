import { Metadata } from "next";

import { Breadcrumb, PageLayout, ToolsListItem } from "@/components";
import { site } from "@/content";
import * as tools from "@/content/tools";
import { ContentTypes, sentenceCase } from "@/framework/client";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const tool = findImportedContent(tools, ContentTypes.Tool, params.slug);

  return (
    <PageLayout
      selectedNavPath="/uses"
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title: "Uses",
                url: "/uses",
              },
              {
                title: tool.meta.title,
              },
            ]}
          />

          <ToolsListItem tool={tool} />
        </>
      }
    />
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(tools).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const tool = findImportedContent(tools, ContentTypes.Tool, params.slug);

  const toolTitle = sentenceCase(tool.meta.slug).toLowerCase();
  const title = `${site.title} - uses - ${toolTitle}`;

  return {
    title,
  };
}
