import React from "react";
import { shallow, render } from "enzyme";

import ActionButton from "./ActionButton";

it("should create", () => {
  const button = shallow(<ActionButton />);

  expect(button).toBeTruthy();
});

it("should show correct text", () => {
  const button = render(<ActionButton text="Add" />);

  expect(button.text()).toEqual("Add");
});
