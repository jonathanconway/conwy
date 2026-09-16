import {
  ContentPageHeader,
  MdxContainer,
  PageLayout,
  ResponsiveMdHalf,
} from "@/components";
import * as pages from "@/content/pages";
import { ContentTypes } from "@/framework/client";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "./types";

export async function PagePage(props: PageProps) {
  const params = await props.params;

  const page = findImportedContent(pages, ContentTypes.Page, params.slug);

  return (
    <PageLayout
      main={
        <>
          <ContentPageHeader
            content={page}
            title={page.meta.title}
            updatedDate={page.meta.updatedDate}
          />

          <ResponsiveMdHalf>
            <MdxContainer>{page.content}</MdxContainer>
          </ResponsiveMdHalf>
        </>
      }
    />
  );
}
