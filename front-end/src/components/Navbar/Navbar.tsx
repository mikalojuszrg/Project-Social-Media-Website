import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>The What</li>
        <li className={styles.nav__item}>The Why</li>
        <li className={styles.nav__item}>The How</li>
      </ul>
    </nav>
  );
};

export default Navbar;
