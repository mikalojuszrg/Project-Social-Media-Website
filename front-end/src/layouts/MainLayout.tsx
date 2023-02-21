import { ReactNode } from "react";
import styles from "./MainLayout.module.scss";

interface props {
  children: ReactNode;
}

const MainLayout: React.FC<props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainLayout;
