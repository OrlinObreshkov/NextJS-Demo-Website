import Button from "../UI/Button";
import ButtonBlue from "../UI/ButtonBlue";
import styles from "../cta/Cta.module.css";

function Cta() {
  return (
    <section className={styles["section-cta"]}>
      <div className="container">
        <h2 className={styles["section-cta__title"]}>Join now</h2>
        <p className={styles["section-cta__subtitle"]}>
          Donec imperdiet consequat consequat. Suspendisse feugiat congue
          posuere. Nulla massa urna, fermentum eget quam aliquet.
        </p>
        <div className={styles["section-cta__btn1"]}>
          <ButtonBlue>Get Started</ButtonBlue>
        </div>
        <div className={styles["section-cta__btn2"]}>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
