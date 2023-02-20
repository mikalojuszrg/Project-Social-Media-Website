import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { mainRoutes } from "./const";

type RouteType = {
  path: string;
  Component: React.ComponentType<any>;
};

const Routes: React.FC = () => {
  const { Layout, routes } = mainRoutes;

  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }: RouteType) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
