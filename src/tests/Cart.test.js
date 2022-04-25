import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RouterSwitch from "../RouterSwitch";
import "@testing-library/jest-dom";

describe("App component", () => {
  it("plus button works", async () => {
    render(<RouterSwitch />);
    const user = userEvent.setup();
    await user.click(screen.getByText("Shop"));
    await user.click(screen.getByTestId("add-to-cart-btn0"));
    await user.click(screen.getByRole("link", { name: /cart icon/i }));

    await user.click(screen.getByLabelText("plus button"));

    expect(screen.getByTestId("item0-qty").textContent).toBe("2");
  });

  it("minus button works", async () => {
    render(<RouterSwitch />);
    const user = userEvent.setup();
    await user.click(screen.getByText("Shop"));
    await user.type(screen.getByTestId("select-0"), "2");
    await user.click(screen.getByTestId("add-to-cart-btn0"));
    await user.click(screen.getByRole("link", { name: /cart icon/i }));

    await user.click(screen.getByLabelText("minus button"));

    expect(screen.getByTestId("item0-qty").textContent).toBe("11");
  });

  it("remove button works", async () => {
    render(<RouterSwitch />);
    const user = userEvent.setup();
    await user.click(screen.getByText("Shop"));
    await user.click(screen.getByTestId("add-to-cart-btn0"));
    await user.click(screen.getByRole("link", { name: /cart icon/i }));

    await user.click(screen.getByLabelText("remove button"));

    expect(screen.getByRole("heading").textContent).toMatch(
      /Looks like your cart is empty/i
    );
  });

  it("combolist works", async () => {
    render(<RouterSwitch />);
    const user = userEvent.setup();
    await user.click(screen.getByText("Shop"));
    await user.click(screen.getByTestId("add-to-cart-btn0"));
    await user.click(screen.getByRole("link", { name: /cart icon/i }));

    expect(screen.getByRole("combobox").value).toEqual("5");
    
    await userEvent.selectOptions(screen.getByRole("combobox"), ["15"]);

    expect(screen.getByRole("combobox").value).toEqual("15");
  });
});
