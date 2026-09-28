import { Metadata } from "next";

import { ArticleLayout, Commentary } from "@/components";
import * as contentMap_ from "@/content";
import { site } from "@/content";
import * as commentariesMap from "@/content/commentaries";
import {
  ContentMap,
  ContentTypes,
  getContentLinkInfo,
} from "@/framework/client";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

const contentMap = contentMap_ as unknown as ContentMap;

export default async function Page(props: PageProps) {
  const params = await props.params;

  const commentary = findImportedContent(
    commentariesMap,
    ContentTypes.Commentary,
    params.slug,
  );

  const sourceLinkInfo = getContentLinkInfo(contentMap, commentary.meta.source);

  return (
    <ArticleLayout
      main={
        <Commentary commentary={commentary} sourceLinkInfo={sourceLinkInfo} />
      }
      aside={<></>}
    />
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
