import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ActionButton from "./ActionButton";

describe("ActionButton", () => {
  it("should show correct text", () => {
    const { getByText } = render(<ActionButton text="Add" />);
    const button = getByText("Add");

    expect(button).toBeVisible();
    expect(button).toBeEnabled();
  });

  it("should have correct button style", () => {
    const { getByText } = render(
      <ActionButton text="Add" buttonStyle="primary" />
    );

    expect(getByText("Add")).toHaveClass("btn-primary");
  });

  it("should be disabled", () => {
    const { getByText } = render(<ActionButton text="Add" disabled />);

    expect(getByText("Add")).toBeDisabled();
  });

  it("should call event handler on click", () => {
    const onClickHandler = jest.fn();
    const { getByText } = render(
      <ActionButton text="Add" onClick={onClickHandler} />
    );

    fireEvent.click(getByText("Add"));

    expect(onClickHandler).toHaveBeenCalled();
  });
});
