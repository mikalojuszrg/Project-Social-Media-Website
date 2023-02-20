import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const MainLayout: React.FC<props> = ({ children }) => {
  return <div>{children}</div>;
};

export default MainLayout;
