import { Micro as Micro_ } from "@/framework";

import { MicrosListItem } from "../micros";

export interface MicroProps {
  readonly micro: Micro_;
}

export function Micro(props: MicroProps) {
  return <MicrosListItem isExpandable={false} {...props} />;
}
