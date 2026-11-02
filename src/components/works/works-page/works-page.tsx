import { worksRoute } from "@/app/routes";
import { workFragment } from "@/content";
import { Work, getTestimonials } from "@/framework";

import { Link } from "../../link";
import { MdxContainer } from "../../mdx";
import { Page } from "../../page";
import { Stack } from "../../stack";
import { Text, TextSizes, TextTypes } from "../../text";
import { Works } from "../works";

interface WorksPageProps {
  readonly works: readonly Work[];
}

export function WorksPage(props: WorksPageProps) {
  const { works } = props;

  const testimonialsCount = getTestimonials(works).length;

  return (
    <Page title={worksRoute.title}>
      <Stack gap={1}>
        <div>
          <MdxContainer>{workFragment.content}</MdxContainer>

          <Text type={TextTypes.Paragraph}>
            <Link href="/testimonials" size={TextSizes.S}>
              Testimonials
            </Link>

            <Text type={TextTypes.Small}> ({testimonialsCount})</Text>
          </Text>
        </div>

        <Works works={works} />
      </Stack>
    </Page>
  );
}
