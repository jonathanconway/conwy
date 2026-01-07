import { ReactNode } from "react";

import * as styles from "./mdx-wrapper.css";

export function MdxWrapper({ children }: { readonly children: ReactNode }) {
  return <div className={styles.mdx}>{children}</div>;
}
