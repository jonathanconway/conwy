import { Work as Work_ } from "@/framework/client";

import { Fragment } from "../../fragments";
import { Section } from "../../section";

export interface WorkBodyProps {
  readonly work: Work_;
}

export function WorkBody({ work: { blurbLong } }: WorkBodyProps) {
  return (
    <Section label="Duties + Achievements">
      <Fragment>{blurbLong}</Fragment>
    </Section>
  );
}
