import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { createProjectMock } from "@/framework";

import { ProjectLinks } from "./project-links";

describe("ProjectLinks", () => {
  it("renders", () => {
    render(<ProjectLinks projectMeta={createProjectMock().meta} />);
  });
});
