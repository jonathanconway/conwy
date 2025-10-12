import { Metadata } from "next";

import "@/components";
import { Breadcrumb, Idea, PageLayout, ResponsiveMdHalf } from "@/components";
import { site } from "@/content";
import * as ideas from "@/content/ideas";
import { Idea as Idea_ } from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;
  const ideaModule = await import(`@/content/ideas/${params.slug}`);
  const ideaModuleItems = Object.values(ideaModule);
  const idea = ideaModuleItems[0] as Idea_;

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
  const allIdeaMetas = Object.values(ideas);
  return allIdeaMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const ideaModule = await import(`@/content/ideas/${params.slug}`);
  const idea = Object.values(ideaModule)[0] as Idea_;
  const title = idea.meta.title;

  return {
    title: `${site.title} - idea - ${title.toLowerCase()}`,
  };
}
