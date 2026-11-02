import { Metadata } from "next";

import { CommentaryPage } from "@/components";
import * as contentMap_ from "@/content";
import { site } from "@/content";
import * as commentariesMap from "@/content/commentaries";
import {
  ContentMap,
  ContentTypes,
  NextPageProps,
  getContentLinkInfo,
} from "@/framework";
import { findImportedContent } from "@/framework/server";

const contentMap = contentMap_ as unknown as ContentMap;

export default async function CommentariesCommentaryPage(props: NextPageProps) {
  const params = await props.params;

  const commentary = findImportedContent(
    commentariesMap,
    ContentTypes.Commentary,
    params.slug,
  );

  const sourceLinkInfo = getContentLinkInfo(contentMap, commentary.meta.source);

  return (
    <CommentaryPage commentary={commentary} sourceLinkInfo={sourceLinkInfo} />
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(commentariesMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(
  props: NextPageProps,
): Promise<Metadata> {
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
