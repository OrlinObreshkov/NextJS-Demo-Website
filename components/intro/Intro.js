import Image from "next/image";
import styles from "./Intro.module.css";
import introImage from "../../public/static/phone.jpg";
import Button from "../UI/Button";

function Intro() {
  return (
    <section className={styles.intro}>
      <div className="container">
        <div className={styles["intro__content"]}>
          <div className={styles["intro__inner"]}>
            <h2>What we offer</h2>
            <p>
              Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat
              magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor
              tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit
              amet aliquam.
            </p>
            <div className={styles["intro__btn"]}>
              <Button>Learn More</Button>
            </div>
          </div>
          <span className={styles["intro__img"]}>
            <Image src={introImage} alt="Crypto phone" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
