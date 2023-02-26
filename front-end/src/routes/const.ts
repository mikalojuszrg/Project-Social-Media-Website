import MainLayout from "../layouts/MainLayout";
import Feed from "../pages/Feed/Feed";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import { MainRoutesType } from "../types/routes";

export const HOME_PATH = "/";
export const REGISTER_PATH = "/register";
export const FEED_PATH = "/feed";

export const mainRoutes: MainRoutesType = {
  Layout: MainLayout,
  routes: [
    {
      title: "Home",
      path: HOME_PATH,
      Component: Home,
    },
    {
      title: "Registration",
      path: REGISTER_PATH,
      Component: Register,
    },
    {
      title: "Feed",
      path: FEED_PATH,
      Component: Feed,
    },
  ],
};
