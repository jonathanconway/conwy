import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { WorkProjects } from "./work-projects";
import { createWorkProjectsPropsMock } from "./work-projects.mocks";

describe("WorkProjects", () => {
  it("renders", () => {
    render(<WorkProjects {...createWorkProjectsPropsMock()} />);
  });
});
