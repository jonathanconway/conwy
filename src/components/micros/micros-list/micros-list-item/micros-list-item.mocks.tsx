import { createMicroMock } from "@/framework/client";

import { MicrosListItemProps } from "./micros-list-item";

export function createMicroListItemPropsMock(): MicrosListItemProps {
  return {
    micro: createMicroMock(),
  };
}
