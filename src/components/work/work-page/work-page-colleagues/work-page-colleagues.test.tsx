import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { WorkPageColleagues } from "./work-page-colleagues";
import { createWorkPageColleaguesPropsMock } from "./work-page-colleagues.mocks";

describe("WorkPageColleagues", () => {
  it("renders", () => {
    render(<WorkPageColleagues {...createWorkPageColleaguesPropsMock()} />);
  });
});
