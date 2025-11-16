import {
  Fragment,
  // Link,
  Notes,
  PageLayout,
  ResponsiveMdHalf, // Text,
} from "@/components";
import { site } from "@/content";
import { notesFragment } from "@/content/fragments";
import * as notes from "@/content/notes";
import { getNoteMetas } from "@/framework/client";

export default function Page() {
  const noteMetas = getNoteMetas(notes);
  // const testimonialsCount = getTestimonials(works).length;

  return (
    <PageLayout
      selectedNavPath="/notes"
      main={
        <>
          <ResponsiveMdHalf>
            <Fragment>
              <notesFragment.content />
              <p>
                {/* <Link href="/testimonials" size={TextSizes.sm}>
                  Testimonials
                </Link> */}

                {/* <Text type={TextTypes.Small}> ({testimonialsCount})</Text> */}
              </p>
            </Fragment>
          </ResponsiveMdHalf>

          <Notes noteMetas={noteMetas} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - work`,
};
