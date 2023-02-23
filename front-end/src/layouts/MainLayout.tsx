import { ReactNode } from "react";
import styles from "./MainLayout.module.scss";

export interface props {
  children: ReactNode;
}

const MainLayout: React.FC<props> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      <footer className={styles.container__footer}>
        Created by Mikalojus Žirgulis
      </footer>
    </div>
  );
};

export default MainLayout;
