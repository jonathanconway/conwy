import {
  Link,
  MdxWrapper,
  PageLayout,
  Stack,
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
        <Stack gap={1}>
          <div>
            <MdxWrapper>{workFragment.content}</MdxWrapper>

            <Text type={TextTypes.Paragraph}>
              <Link href="/testimonials" size={TextSizes.sm}>
                Testimonials
              </Link>

              <Text type={TextTypes.Small}> ({testimonialsCount})</Text>
            </Text>
          </div>

          <Works workMetas={workMetas} />
        </Stack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - work`,
};
