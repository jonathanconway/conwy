import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { EngagementPageColleagues } from "./engagement-page-colleagues";
import { createEngagementPageColleaguesPropsMock } from "./engagement-page-colleagues.mocks";

describe("EngagementPageColleagues", () => {
  it("renders", () => {
    render(
      <EngagementPageColleagues
        {...createEngagementPageColleaguesPropsMock()}
      />,
    );
  });
});
