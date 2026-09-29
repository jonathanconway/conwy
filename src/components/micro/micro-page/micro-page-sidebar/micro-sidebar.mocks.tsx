import { createMicroMock } from "@/framework/client";

import { MicroSidebarProps } from "./micro-sidebar";

export function createMicroSidebarPropsMock(): MicroSidebarProps {
  return {
    micro: createMicroMock(),
  };
}
