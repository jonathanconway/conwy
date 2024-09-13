---
to: src/components/<%= h.namePartBranches() %>/<%= h.namePartLeaf() %>.tsx
---

import { <%= h.namePascal() %>Props } from "./<%= h.namePartLeaf() %>.types";
import * as styles from "./<%= h.namePartLeaf() %>.styles";

export function <%= h.namePascal() %>(props: <%= h.namePascal() %>Props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}
