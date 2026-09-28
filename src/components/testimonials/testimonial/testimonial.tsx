import { TestimonialAndWork as TestimonialAndWork_ } from "@/framework/client";

import { Box } from "../../box";
import { Chain } from "../../chain";
import { DateFormats, DateView } from "../../date";
import { IconTypes } from "../../icon";
import { Link } from "../../link";
import { LinkLayoutTypes } from "../../link/link-layout-type";
import { Stack } from "../../stack";
import { TextSizes } from "../../text";

import * as styles from "./testimonial.css";

export interface TestimonialProps {
  readonly testimonial: TestimonialAndWork_;
}

export function Testimonial({
  testimonial: {
    work,
    meta: { content, authorTitle, date, linkedInUrl },
  },
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
                  <DateView format={DateFormats.Short}>{date}</DateView>
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
