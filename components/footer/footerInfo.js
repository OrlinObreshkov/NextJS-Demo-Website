import styles from "../footer/footerInfo.module.css";
import Button from "../UI/Button";

function FooterInfo() {
  return (
    <div className={styles.info}>
      <h2 className={styles["info__title"]}>For more info</h2>
      <p className={styles["info__description"]}>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
      <div className={styles["info__btn"]}>
        <Button color="#fff">Learn More</Button>
      </div>
    </div>
  );
}

export default FooterInfo;
