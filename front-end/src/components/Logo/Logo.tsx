import logo from "../Logo/assets/logoo.jpg";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <>
      <img className={styles.logo} src={logo} alt="logo" />
    </>
  );
};

export default Logo;
