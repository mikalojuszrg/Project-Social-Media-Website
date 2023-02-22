import styles from "./HeroSection.module.scss";
import image from "../../pages/Home/assets/woman.jpg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
      <section className={styles.container__info}>
        <h2 className={styles.container__subheading}>NEW PLATFORM</h2>
        <h1 className={styles.container__heading}>Your Next Social Life.</h1>
        <p className={styles.container__description}>
          Discover a new social media experience. Your interests matter, and so
          does your time. Join now and get more of what you care about.
        </p>
        <Button variant="primary" onClick={() => console.log("YO")}>
          GET STARTED
        </Button>
      </section>
      <section className={styles.container__visual}>
        <img src={image} alt="woman holding leaf" />
      </section>
    </main>
  );
};

export default HeroSection;
