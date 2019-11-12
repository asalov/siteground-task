import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ActionButton from "components/ActionButton/ActionButton";
import ProductModal from "./ProductModal";

describe("ProductModal", () => {
  const renderModalButtons = (onSave, onCancel) => (
    <>
      <ActionButton text="Save" onClick={onSave} />
      <ActionButton text="Cancel" onClick={onCancel} />
    </>
  );

  it("should show modal", () => {
    const { getByTestId } = render(<ProductModal show />);

    expect(getByTestId("modal")).toBeVisible();
  });

  it("should hide modal", () => {
    const { queryByTestId } = render(<ProductModal show={false} />);

    expect(queryByTestId("modal")).toBeNull();
  });

  it("should show title", () => {
    const { getByTestId } = render(<ProductModal show title="Modal title" />);

    expect(getByTestId("modal-title")).toHaveTextContent("Modal title");
  });

  it("should show content", () => {
    const content = <div>Test content</div>;
    const { getByText } = render(<ProductModal show content={content} />);

    expect(getByText("Test content")).toBeVisible();
  });

  it("should show action buttons", () => {
    const { getByText } = render(
      <ProductModal show modalButtons={renderModalButtons()} />
    );

    expect(getByText("Save")).toBeVisible();
    expect(getByText("Cancel")).toBeVisible();
  });

  it("should call action button onClick event handlers", () => {
    const onSave = jest.fn();
    const onCancel = jest.fn();

    const { getByText } = render(
      <ProductModal show modalButtons={renderModalButtons(onSave, onCancel)} />
    );

    fireEvent.click(getByText("Save"));
    expect(onSave).toHaveBeenCalled();

    fireEvent.click(getByText("Cancel"));
    expect(onCancel).toHaveBeenCalled();

    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
