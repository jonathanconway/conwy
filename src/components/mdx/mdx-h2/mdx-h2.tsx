import { Props } from "@/framework/client";

import { SectionHeading } from "../../heading";

export type MdxH2Props = Props<typeof SectionHeading>;

export function MdxH2(props: MdxH2Props) {
  return <SectionHeading {...props} />;
}
