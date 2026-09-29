import { Micro as Micro_ } from "@/framework/client";

import { MicrosListItem } from "../micros";

export interface MicroProps {
  readonly micro: Micro_;
}

export function Micro(props: MicroProps) {
  return <MicrosListItem isCollapsed={false} {...props} />;
}
