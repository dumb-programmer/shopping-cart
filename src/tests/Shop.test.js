import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import RouterSwitch from "../RouterSwitch";

describe("Shop page", () => {
  it("shop page route works", async () => {
    render(<RouterSwitch />);
    const user = userEvent.setup();

    await user.click(screen.getByText("Shop"));

    expect(screen.getByText("Inspired")).toBeInTheDocument();
  });

  it("user can add item to cart", async () => {
    render(<RouterSwitch />);
    const user = userEvent.setup();

    await user.click(screen.getByText("Shop"));
    await user.click(screen.getByTestId("add-to-cart-btn0"));
    await user.click(screen.getByRole("link", { name: /cart icon/i }));

    expect(screen.findByText("Inspired")).not.toBeNull();
    expect(screen.getByTestId("item0-qty").textContent).toBe("1");
  });

  it("user can add more than one item to cart", async () => {
    render(<RouterSwitch />);
    const user = userEvent.setup();

    await user.click(screen.getByText("Shop"));

    const input = screen.getByTestId("select-0");
    await user.type(input, "2");
    expect(input.value).toBe("12");

    await user.click(screen.getByTestId("add-to-cart-btn0"));
    await user.click(screen.getByRole("link", { name: /cart icon/i }));
    expect(screen.getByTestId("item0-qty").textContent).toBe("12");
  });
});
