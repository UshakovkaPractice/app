import { type FC, type PropsWithChildren, Suspense } from "react";

export const SuspenseLayout: FC<PropsWithChildren> = ({ children }) => (
  <Suspense fallback={"loading"}>{children}</Suspense>
);
