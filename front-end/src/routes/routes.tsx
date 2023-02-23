import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { mainRoutes } from "./const";

const Routes: React.FC = () => {
  const { Layout, routes } = mainRoutes;

  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
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
