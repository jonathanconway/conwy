import { render } from "@testing-library/react";

import { PROJECT_META_MOCK } from "@/framework/client";

import { ProjectLinks } from "./project-links";

describe("ProjectLinks", () => {
  it("renders", () => {
    render(<ProjectLinks projectMeta={PROJECT_META_MOCK} />);
  });
});
