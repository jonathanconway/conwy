import { Micro as Micro_ } from "@/framework/client";

import { MicrosListItem } from "../micros";

import * as styles from "./micro.css";

export interface MicroProps {
  readonly micro: Micro_;
}

export function Micro(props: MicroProps) {
  return (
    <div className={styles.container}>
      <MicrosListItem isCollapsed={false} {...props} />
    </div>
  );
}
