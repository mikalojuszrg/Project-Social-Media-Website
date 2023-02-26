import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { Helmet } from "react-helmet";
import { mainRoutes } from "./const";

const Routes: React.FC = () => {
  const { Layout, routes } = mainRoutes;

  return (
    <RoutesWrapper>
      {routes.map(({ path, Component, title }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Helmet>
                <title>{title}</title>
              </Helmet>
              <Component />
            </Layout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
