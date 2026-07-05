import { Metadata } from "next";

import "@/components";
import { Breadcrumb, PageLayout, Prompt, ResponsiveMdHalf } from "@/components";
import { site } from "@/content";
import * as prompts from "@/content/prompts";
import {
  Prompt as Prompt_,
  importContentBySlug,
  sentenceCase,
} from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const prompt = importContentBySlug<Prompt_>(prompts, "prompt", params.slug);

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
  const allPromptMetas = Object.values(prompts).map((item) => item.meta);
  return allPromptMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const prompt = importContentBySlug<Prompt_>(prompts, "prompt", params.slug);

  const promptTitle = sentenceCase(prompt.meta.slug).toLowerCase();
  const title = `${site.title} - prompt - ${promptTitle}`;

  return {
    title,
  };
}
