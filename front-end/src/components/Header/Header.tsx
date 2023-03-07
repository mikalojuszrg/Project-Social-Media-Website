import { FEED_PATH, HOME_PATH, REGISTER_PATH } from "../../routes/const";
import { useLocation, useNavigate } from "react-router-dom";

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
        <Button
          variant="primary"
          onClick={() =>
            navigate(
              location.pathname === HOME_PATH ? REGISTER_PATH : HOME_PATH
            )
          }
        >
          {location.pathname === HOME_PATH
            ? "SIGN UP"
            : location.pathname === REGISTER_PATH
            ? "LOGIN"
            : "LOG OUT"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
