import { render } from "@testing-library/react";
import { Switch } from "./switch";
import { SWITCH_PROPS_MOCK } from "./switch.mocks";

describe("Switch", () => {
  test("renders", () => {
    render(<Switch {...SWITCH_PROPS_MOCK} />);
  });
});
