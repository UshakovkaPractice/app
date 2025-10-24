import { store } from "@shared/api";
import type { ReactElement } from "react";
import { Provider } from "react-redux";

export const withRedux = (component: () => ReactElement) => () => (
  <Provider store={store}>{component()}</Provider>
);
