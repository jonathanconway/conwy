import { ComponentPropsWithRef, forwardRef } from "react";

import * as styles from "./fragment.css";

export type FragmentProps = ComponentPropsWithRef<"div"> & {
  readonly slug?: string;
};

// todo: rename to content or contentfragment?

function Fragment_(props: FragmentProps, ref: any) {
  return <div className={styles.fragment} {...props} ref={ref} />;
}

export const Fragment = forwardRef(Fragment_);
