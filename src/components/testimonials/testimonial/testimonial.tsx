import { Date, DateFormats } from "@/components/date";
import { IconTypes } from "@/components/icon";
import { LinkLayoutTypes } from "@/components/link/link-layout-type";
import { Stack } from "@/components/stack";
import { TestimonialAndWork as TestimonialAndWork_ } from "@/framework/client";

import { Box } from "../../box";
import { Chain } from "../../chain";
import { Link } from "../../link";
import { TextSizes } from "../../text";

import * as styles from "./testimonial.css";

export interface TestimonialProps {
  readonly testimonial: TestimonialAndWork_;
}

export function Testimonial({
  testimonial: { content, authorTitle, date, linkedInUrl, work },
}: TestimonialProps) {
  return (
    <Box key={content}>
      <Stack gap={0.25}>
        <div className={styles.feedbackItemQuote}>{content}</div>

        <Stack gap={0.25}>
          <Chain>
            {[
              authorTitle && (
                <div className={styles.feedbackItemAuthor}>– {authorTitle}</div>
              ),

              date && (
                <div className={styles.feedbackItemDate}>
                  <Date format={DateFormats.Short}>{date}</Date>
                </div>
              ),
            ]}
          </Chain>

          <Chain>
            {[
              linkedInUrl && (
                <Link
                  href={linkedInUrl}
                  icon={IconTypes.LinkedIn}
                  size={TextSizes.xs}
                  layoutType={LinkLayoutTypes.Compact}
                >
                  LinkedIn
                </Link>
              ),

              work && (
                <Link
                  href={`/work/${work.slug}`}
                  size={TextSizes.xs}
                  layoutType={LinkLayoutTypes.Compact}
                >
                  {work.client}
                </Link>
              ),
            ]}
          </Chain>
        </Stack>
      </Stack>
    </Box>
  );
}
