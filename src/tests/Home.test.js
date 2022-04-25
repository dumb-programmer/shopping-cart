import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import RouterSwitch from "../RouterSwitch";

describe("Home Component", () => {
  it("shop now button works", async () => {
    const user = userEvent.setup();
    render(<RouterSwitch />);
    await user.click(screen.getByRole("button", { name: /shop now/i }));
    expect(screen.getByText(/inspired/i)).toBeInTheDocument();
  });
});
