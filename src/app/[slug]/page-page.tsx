import { ContentPage } from "@/components";
import * as pagesMap from "@/content/pages";
import { ContentTypes } from "@/framework";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "./types";

export async function PagePage(props: PageProps) {
  const params = await props.params;

  const page = findImportedContent(pagesMap, ContentTypes.Page, params.slug);

  return (
    <ContentPage
      content={page}
      title={page.meta.title}
      updatedDate={page.meta.updatedDate}
    >
      {page.content}
    </ContentPage>
  );
}
