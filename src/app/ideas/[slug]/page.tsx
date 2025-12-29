import { Metadata } from "next";

import "@/components";
import { Breadcrumb, Idea, PageLayout, ResponsiveMdHalf } from "@/components";
import { site } from "@/content";
import * as ideas from "@/content/ideas";
import { Idea as Idea_, importContentBySlug } from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const idea = importContentBySlug<Idea_>(ideas, "idea", params.slug);

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
  const allIdeaMetas = Object.values(ideas).map((item) => item.meta);
  return allIdeaMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const idea = importContentBySlug<Idea_>(ideas, "idea", params.slug);

  const title = idea.meta.title.toLowerCase();

  return {
    title: `${site.title} - idea - ${title}`,
  };
}
