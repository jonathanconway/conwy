import {
  ContentPageHeader,
  MdxContainer,
  PageLayout,
  ResponsiveMdHalf,
} from "@/components";
import * as pages from "@/content/pages";
import { Page as Page_, importContentBySlug } from "@/framework/client";

import { PageProps } from "./types";

export async function PagePage(props: PageProps) {
  const params = await props.params;

  const page = importContentBySlug<Page_>(pages, "page", params.slug);

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
