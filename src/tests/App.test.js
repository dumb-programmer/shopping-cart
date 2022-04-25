import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import RouterSwitch from "../RouterSwitch";
import "@testing-library/jest-dom";

describe("App component", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const { container } = render(<RouterSwitch history={history} />);
    expect(container).toMatchSnapshot();
  });
});
