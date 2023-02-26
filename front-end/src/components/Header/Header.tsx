import { useLocation, useNavigate } from "react-router-dom";
import { HOME_PATH, REGISTER_PATH } from "../../routes/const";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Logo onClick={() => navigate(HOME_PATH)} />
      {location.pathname === HOME_PATH ? <Navbar /> : <></>}
      <div className={styles.header__buttons}>
        <Button variant="secondary" onClick={() => console.log("Yo")}>
          Contact
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            navigate(
              location.pathname === HOME_PATH ? REGISTER_PATH : HOME_PATH
            )
          }
        >
          {location.pathname === HOME_PATH ? "SIGN UP" : "LOGIN"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
