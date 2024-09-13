import { render } from "@testing-library/react";

import { WorkProjects } from "./work-projects";
import { WORK_PROJECTS_PROPS_MOCK } from "./work-projects.mocks";

describe("WorkProjects", () => {
  it("renders", () => {
    render(<WorkProjects {...WORK_PROJECTS_PROPS_MOCK} />);
  });
});
