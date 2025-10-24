import compose from "compose-function";
import { withRedux } from "./with-redux";

export const withProviders = compose(withRedux);
