import MainLayout from "../layouts/MainLayout";
import Feed from "../pages/Feed/Feed";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

export const HOME_PATH = "/";
export const REGISTER_PATH = "/register";
export const FEED_PATH = "/feed";

export const mainRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_PATH,
      Component: Home,
    },
    {
      path: REGISTER_PATH,
      Component: Register,
    },
    {
      path: FEED_PATH,
      Component: Feed,
    },
  ],
};
