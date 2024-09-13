---
to: src/components/<%= h.namePartBranches() %>/<%= h.namePartLeaf() %>.test.tsx
---

import { render } from "@testing-library/react";
import { <%= h.changeCase.pascalCase(h.namePartLeaf()) %> } from "./<%= h.namePartLeaf() %>";
import { <%= h.nameUpper() %>_PROPS_MOCK } from "./<%= h.namePartLeaf() %>.mocks";

describe("<%= h.changeCase.pascalCase(h.namePartLeaf()) %>", () => {
  test("renders", () => {
    render(<<%= h.changeCase.pascalCase(h.namePartLeaf()) %> {...<%= h.nameUpper() %>_PROPS_MOCK} />);
  });
});
