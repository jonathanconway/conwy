import { ComponentPropsWithRef, forwardRef } from "react";

import moduleStyles from "./fragment.module.css";

export type FragmentProps = ComponentPropsWithRef<"div"> & {
  readonly slug?: string;
};

function Fragment_(props: FragmentProps, ref: any) {
  return <div className={moduleStyles.fragment} {...props} ref={ref} />;
}

export const Fragment = forwardRef(Fragment_);
