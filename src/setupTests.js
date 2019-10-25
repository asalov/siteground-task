import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import appStore from "store";

export const renderWithRedux = (
  component,
  {
    initialState = appStore.getState(),
    store = createStore(state => state, initialState, applyMiddleware(thunk))
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
};
