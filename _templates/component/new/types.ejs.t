---
to: src/components/<%= h.namePartBranches() %>/<%= h.namePartLeaf() %>.types.ts
---

import { ReactNode } from "react";

export interface <%= h.namePascal() %>Props {
  readonly children?: ReactNode;
}
