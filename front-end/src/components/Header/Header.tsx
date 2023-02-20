import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
      <div>
        <Button onClick={() => console.log("Yo")}>Contact</Button>
        <Button onClick={() => console.log("Yo")}>Sign up</Button>
      </div>
    </header>
  );
};

export default Header;
