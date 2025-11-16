import {
  Fragment,
  Link,
  PageLayout,
  ResponsiveMdHalf,
  Text,
  TextSizes,
  TextTypes,
  Works,
} from "@/components";
import { site } from "@/content";
import { workFragment } from "@/content/fragments";
import * as works from "@/content/works";
import { getTestimonials, getWorkMetas } from "@/framework/client";

export default function Page() {
  const workMetas = getWorkMetas(works);
  const testimonialsCount = getTestimonials(works).length;

  return (
    <PageLayout
      selectedNavPath="/work"
      main={
        <>
          <ResponsiveMdHalf>
            <Fragment>
              <workFragment.content />

              <p>
                <Link href="/testimonials" size={TextSizes.sm}>
                  Testimonials
                </Link>

                <Text type={TextTypes.Small}> ({testimonialsCount})</Text>
              </p>
            </Fragment>
          </ResponsiveMdHalf>

          <Works workMetas={workMetas} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - work`,
};
