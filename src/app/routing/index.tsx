import { IndexPage } from "@pages/index";
import { CurrentRoomPage } from "@pages/room/ui/current-room.page";
import { paths } from "@shared/router";
import { SuspenseLayout } from "@shared/ui/layouts/suspense";
import { useRoutes, type RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  { path: paths.index, element: <IndexPage /> },
  { path: paths.room, element: <CurrentRoomPage /> },
  { path: paths.settings, element: "Settings page" },
];

export const AppRouter = () => (
  <SuspenseLayout>{useRoutes(routes)}</SuspenseLayout>
);
