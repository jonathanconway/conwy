import { TestimonialAndWork as TestimonialAndWork_ } from "@/framework";

import { Box } from "../../box";
import { Chain } from "../../chain";
import { DateFormats, DateView } from "../../date";
import { IconTypes } from "../../icon";
import { Link } from "../../link";
import { LinkLayoutTypes } from "../../link/link-layout-type";
import { Stack } from "../../stack";
import { Text, TextSizes, TextTypes } from "../../text";

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
        <Text type={TextTypes.Body}>{content}</Text>

        <Stack gap={0.25}>
          <Chain>
            {[
              authorTitle && (
                <Text type={TextTypes.Small}>– {authorTitle}</Text>
              ),

              date && (
                <Text type={TextTypes.Small}>
                  <DateView format={DateFormats.Short}>{date}</DateView>
                </Text>
              ),
            ]}
          </Chain>

          <Chain>
            {[
              linkedInUrl && (
                <Link
                  href={linkedInUrl}
                  icon={IconTypes.LinkedIn}
                  size={TextSizes.XS}
                  layoutType={LinkLayoutTypes.Compact}
                >
                  LinkedIn
                </Link>
              ),

              work && (
                <Link
                  href={`/work/${work.slug}`}
                  size={TextSizes.XS}
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
