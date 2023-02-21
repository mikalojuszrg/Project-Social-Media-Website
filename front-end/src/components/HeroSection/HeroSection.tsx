import styles from "./HeroSection.module.scss";
import image from "../../pages/Home/assets/woman.jpg";

const HeroSection: React.FC = () => {
  return (
    <main className={styles.container}>
      <section className={styles.container__info}>asdasdasdasasdasda</section>
      <section className={styles.container__visual}>
        <img src={image} alt="woman holding leaf" />
      </section>
    </main>
  );
};

export default HeroSection;
