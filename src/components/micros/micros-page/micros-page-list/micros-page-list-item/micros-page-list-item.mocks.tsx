import { createMicroMock } from "@/framework";

import { MicrosPageListItemProps } from "./micros-page-list-item";

export function createMicroListItemPropsMock(): MicrosPageListItemProps {
  return {
    micro: createMicroMock(),
  };
}
