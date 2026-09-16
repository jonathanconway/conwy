import { Metadata } from "next";

import { Breadcrumb, Idea, PageLayout, ResponsiveMdHalf } from "@/components";
import { site } from "@/content";
import * as ideas from "@/content/ideas";
import { ContentTypes } from "@/framework/client";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const idea = findImportedContent(ideas, ContentTypes.Idea, params.slug);

  return (
    <PageLayout
      selectedNavPath="/ideas"
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title: "Ideas",
                url: "/ideas",
              },
              {
                title: idea.meta.title,
              },
            ]}
          />

          <ResponsiveMdHalf>
            <Idea idea={idea} />
          </ResponsiveMdHalf>
        </>
      }
    />
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(ideas).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const idea = findImportedContent(ideas, ContentTypes.Idea, params.slug);

  const title = idea.meta.title.toLowerCase();

  return {
    title: `${site.title} - idea - ${title}`,
  };
}
