import { createMicroMock } from "@/framework";

import { MicroPageSidebarProps } from "./micro-page-sidebar";

export function createMicroPageSidebarPropsMock(): MicroPageSidebarProps {
  return {
    micro: createMicroMock(),
  };
}
