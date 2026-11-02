import { Micro as Micro_ } from "@/framework";

import { ContentSidebarContainer } from "../../../content-page";

import { MicroPageSidebarImage } from "./micro-page-sidebar-image";
import { MicroPageSidebarLinks } from "./micro-page-sidebar-links";

export interface MicroPageSidebarProps {
  readonly micro: Micro_;
}

export function MicroPageSidebar(props: MicroPageSidebarProps) {
  const { micro } = props;

  return (
    <ContentSidebarContainer>
      <MicroPageSidebarImage />

      <MicroPageSidebarLinks microMeta={micro.meta} />
    </ContentSidebarContainer>
  );
}
