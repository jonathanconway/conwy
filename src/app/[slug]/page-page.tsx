import {
  Breadcrumb,
  MdxWrapper,
  PageLayout,
  ResponsiveMdHalf,
} from "@/components";
import * as pages from "@/content/pages";
import { Page as Page_, importContentBySlug } from "@/framework/client";

import { PageProps } from "./types";

export async function PagePage(props: PageProps) {
  const params = await props.params;

  const page = importContentBySlug<Page_>(pages, "page", params.slug);

  const title = page.meta.title;

  return (
    <PageLayout
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title,
              },
            ]}
          />

          <ResponsiveMdHalf>
            <MdxWrapper>{page.content}</MdxWrapper>
          </ResponsiveMdHalf>
        </>
      }
    />
  );
}
