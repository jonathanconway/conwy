import { Micro as Micro_ } from "@/framework/client";

import { ContentSidebarContainer } from "../../../content-page";

import { MicroSidebarImage } from "./micro-sidebar-image";
import { MicroSidebarLinks } from "./micro-sidebar-links";

export interface MicroSidebarProps {
  readonly micro: Micro_;
}

export function MicroSidebar(props: MicroSidebarProps) {
  const { micro } = props;

  return (
    <ContentSidebarContainer>
      <MicroSidebarImage microMeta={micro.meta} />

      <MicroSidebarLinks microMeta={micro.meta} />
    </ContentSidebarContainer>
  );
}
