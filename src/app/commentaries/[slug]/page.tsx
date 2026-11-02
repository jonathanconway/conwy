import { Metadata } from "next";

import {
  commentariesRoute,
  createCommentariesCommentaryRoute,
} from "@/app/routes";
import { Commentary, CommentarySource, Page } from "@/components";
import * as contentMap_ from "@/content";
import { site } from "@/content";
import * as commentariesMap from "@/content/commentaries";
import { ContentMap, ContentTypes, getContentLinkInfo } from "@/framework";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

const contentMap = contentMap_ as unknown as ContentMap;

export default async function CommentariesPage(props: PageProps) {
  const params = await props.params;

  const commentary = findImportedContent(
    commentariesMap,
    ContentTypes.Commentary,
    params.slug,
  );

  const sourceLinkInfo = getContentLinkInfo(contentMap, commentary.meta.source);

  const commentaryRoute = createCommentariesCommentaryRoute(commentary);

  return (
    <Page
      breadcrumbSegments={[commentariesRoute, { title: commentaryRoute.title }]}
      title={
        <CommentarySource
          sourceLink={commentary.meta.source}
          sourceLinkInfo={sourceLinkInfo}
        />
      }
    >
      <Commentary commentary={commentary} />
    </Page>
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(commentariesMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const commentary = findImportedContent(
    commentariesMap,
    ContentTypes.Commentary,
    params.slug,
  );

  const sourceContentLink = getContentLinkInfo(
    contentMap,
    commentary.meta.source,
  );
  const sourceContentTitle = sourceContentLink.title.toLowerCase();

  const title = `${site.title} - commentaries - ${sourceContentTitle}`;

  return {
    title,
  };
}
