import logo from "../Logo/assets/logo1.jpeg";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <>
      <img className={styles.logo} src={logo} alt="logo" />
    </>
  );
};

export default Logo;
