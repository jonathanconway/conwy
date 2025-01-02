import { MicroMeta } from "@/framework/client";

import { MicrosListItem } from "../micros";

import * as styles from "./micro.css";

export interface MicroProps {
  readonly microMeta: MicroMeta;
}

export function Micro(props: MicroProps) {
  return (
    <div className={styles.container}>
      <MicrosListItem isCollapsed={false} {...props} />
    </div>
  );
}
