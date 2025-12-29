import {
  Breadcrumb,
  Fragment,
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
  const Content = page.content;

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
            <Fragment>
              <Content />
            </Fragment>
          </ResponsiveMdHalf>
        </>
      }
    />
  );
}
