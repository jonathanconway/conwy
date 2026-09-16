import { Metadata } from "next";

import { Breadcrumb, PageLayout, Prompt } from "@/components";
import { site } from "@/content";
import * as prompts from "@/content/prompts";
import { ContentTypes, sentenceCase } from "@/framework/client";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const prompt = findImportedContent(prompts, ContentTypes.Prompt, params.slug);

  return (
    <PageLayout
      selectedNavPath="/prompts"
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title: "Prompts",
                url: "/prompts",
              },
              {
                title: prompt.meta.title,
              },
            ]}
          />

          <Prompt title={`Prompt: ${prompt.meta.title}`} prompt={prompt} />
        </>
      }
    />
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(prompts).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const prompt = findImportedContent(prompts, ContentTypes.Prompt, params.slug);

  const promptTitle = sentenceCase(prompt.meta.slug).toLowerCase();
  const title = `${site.title} - prompt - ${promptTitle}`;

  return {
    title,
  };
}
