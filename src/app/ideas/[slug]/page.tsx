import { Metadata } from "next";

import { createIdeasIdeaRoute, ideasRoute } from "@/app/routes";
import {
  ContentPageSubHeader,
  Idea,
  Page,
  ResponsiveMdHalf,
} from "@/components";
import { site } from "@/content";
import * as ideasMap from "@/content/ideas";
import { ContentTypes } from "@/framework";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function IdeaPage(props: PageProps) {
  const params = await props.params;

  const idea = findImportedContent(ideasMap, ContentTypes.Idea, params.slug);
  const ideaRoute = createIdeasIdeaRoute(idea);

  return (
    <Page
      breadcrumbSegments={[ideasRoute, ideaRoute]}
      title={ideaRoute.title}
      subHeaderSlot={<ContentPageSubHeader content={idea} />}
    >
      <ResponsiveMdHalf>
        <Idea idea={idea} />
      </ResponsiveMdHalf>
    </Page>
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(ideasMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const idea = findImportedContent(ideasMap, ContentTypes.Idea, params.slug);
  const ideaTitle = idea.meta.title.toLowerCase();

  const title = `${site.title} - idea - ${ideaTitle}`;

  return {
    title,
  };
}
