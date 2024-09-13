import { Fragment, PageLayout, Works } from "@/components";
import { site } from "@/content";
import { Work as Work_ } from "@/content/fragments";
import * as works from "@/content/works";
import { getWorkMetas } from "@/framework";

export default function Page() {
  const workMetas = getWorkMetas(works);

  return (
    <PageLayout
      selectedNavPath="/work"
      main={
        <>
          <Fragment>
            <Work_ />
          </Fragment>

          <Works workMetas={workMetas} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - work`,
};
