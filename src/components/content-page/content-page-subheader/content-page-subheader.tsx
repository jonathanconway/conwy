import { PageSubHeaderLayout } from "../../page/page-subheader";

import { generateContentPageSubHeaderLinks } from "./content-page-subheader-links-generate";
import { ContentPageSubHeaderProps } from "./content-page-subheader-props";

export function ContentPageSubHeader(props: ContentPageSubHeaderProps) {
  const linksSlot = generateContentPageSubHeaderLinks(props);
  return <PageSubHeaderLayout linksSlot={linksSlot} />;
}
