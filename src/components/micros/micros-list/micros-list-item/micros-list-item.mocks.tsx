import { createMicroMock } from "@/framework";

import { MicrosListItemProps } from "./micros-list-item";

export function createMicroListItemPropsMock(): MicrosListItemProps {
  return {
    micro: createMicroMock(),
  };
}
