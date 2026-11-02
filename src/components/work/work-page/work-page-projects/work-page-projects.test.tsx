import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { WorkPageProjects } from "./work-page-projects";
import { createWorkPageProjectsPropsMock } from "./work-page-projects.mocks";

describe("WorkPageProjects", () => {
  it("renders", () => {
    render(<WorkPageProjects {...createWorkPageProjectsPropsMock()} />);
  });
});
