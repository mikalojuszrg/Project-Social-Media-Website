import logo from "../Logo/assets/logoo.jpg";
import styles from "./Logo.module.scss";

interface Props {
  onClick: () => void;
}

const Logo: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <img onClick={onClick} className={styles.logo} src={logo} alt="logo" />
    </>
  );
};

export default Logo;
