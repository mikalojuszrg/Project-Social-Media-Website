import { useNavigate } from "react-router-dom";
import { REGISTER_PATH } from "../../routes/const";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
      <div className={styles.header__buttons}>
        <Button variant="secondary" onClick={() => console.log("Yo")}>
          Contact
        </Button>
        <Button variant="primary" onClick={() => navigate(REGISTER_PATH)}>
          SIGN UP
        </Button>
      </div>
    </header>
  );
};

export default Header;
