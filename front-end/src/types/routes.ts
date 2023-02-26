import { props } from "../layouts/MainLayout";

type RouteType = {
  title: string;
  path: string;
  Component: React.FC;
};

export type MainRoutesType = {
  Layout: React.FC<props>;
  routes: RouteType[];
};
