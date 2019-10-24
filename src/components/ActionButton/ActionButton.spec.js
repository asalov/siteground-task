import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ActionButton from "./ActionButton";

it("should create", () => {
  const { getByText } = render(<ActionButton text="Add" />);
  const button = getByText("Add");

  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
});

it("should have correct type", () => {
  const { getByText } = render(<ActionButton text="Add" type="primary" />);

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
