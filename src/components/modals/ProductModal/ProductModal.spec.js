import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ProductModal from "./ProductModal";

describe("ProductModal", () => {
  it("should show modal", () => {
    const { getByTestId } = render(<ProductModal show actionButtons={[]} />);

    expect(getByTestId("modal")).toBeVisible();
  });

  it("should hide modal", () => {
    const { queryByTestId } = render(
      <ProductModal show={false} actionButtons={[]} />
    );

    expect(queryByTestId("modal")).toBeNull();
  });

  it("should show title", () => {
    const { getByTestId } = render(
      <ProductModal show title="Modal title" actionButtons={[]} />
    );

    expect(getByTestId("modal-title")).toHaveTextContent("Modal title");
  });

  it("should show content", () => {
    const content = <div>Test content</div>;
    const { getByText } = render(
      <ProductModal show content={content} actionButtons={[]} />
    );

    expect(getByText("Test content")).toBeVisible();
  });

  it("should show action buttons", () => {
    const actionButtons = [{ text: "Save" }, { text: "Cancel" }];

    const { getByText } = render(
      <ProductModal show actionButtons={actionButtons} />
    );

    expect(getByText("Save")).toBeVisible();
    expect(getByText("Cancel")).toBeVisible();
  });

  it("should call action button onClick event handlers", () => {
    const onSave = jest.fn();
    const onCancel = jest.fn();
    const actionButtons = [
      { text: "Save", onClick: onSave },
      { text: "Cancel", onClick: onCancel }
    ];

    const { getByText } = render(
      <ProductModal show actionButtons={actionButtons} />
    );

    fireEvent.click(getByText("Save"));
    expect(onSave).toHaveBeenCalled();

    fireEvent.click(getByText("Cancel"));
    expect(onCancel).toHaveBeenCalled();

    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
