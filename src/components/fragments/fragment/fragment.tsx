import { ComponentPropsWithRef } from "react";

import moduleStyles from "./fragment.module.css";

export type FragmentProps = ComponentPropsWithRef<"div">;

// function getRenderableChildren(children: ReactNode) {
//   return Children.map(children, (child) => {
//     if (
//       !child ||
//       typeof child !== "object" ||
//       !("type" in child || "props" in child || "key" in child)
//     ) {
//       return null;
//     }

//     return child;
//   });
// }

export function Fragment(props: FragmentProps) {
  return <div className={moduleStyles.fragment} {...props} />;
}
