import { createMicroMock } from "@/framework";

import { MicroSidebarProps } from "./micro-sidebar";

export function createMicroSidebarPropsMock(): MicroSidebarProps {
  return {
    micro: createMicroMock(),
  };
}
