import { Work as Work_ } from "@/framework/client";

import { MdxWrapper } from "../../mdx";
import { Section } from "../../section";

export interface WorkBodyProps {
  readonly work: Work_;
}

export function WorkBody(props: WorkBodyProps) {
  const {
    work: { blurbLong },
  } = props;

  return (
    <Section label="Duties + Achievements">
      <MdxWrapper>{blurbLong}</MdxWrapper>
    </Section>
  );
}
