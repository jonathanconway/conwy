import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { WorkColleagues } from "./work-colleagues";
import { WORK_COLLEAGUE_RELATIONSHIPS_PROPS_MOCK } from "./work-colleagues.mocks";

describe("WorkColleagues", () => {
  it("renders", () => {
    render(<WorkColleagues {...WORK_COLLEAGUE_RELATIONSHIPS_PROPS_MOCK} />);
  });
});
