import { withProviders } from "./providers";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routing";

export const Core = withProviders(() => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
});
