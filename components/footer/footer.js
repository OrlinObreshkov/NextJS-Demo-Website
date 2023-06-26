import Contacts from "../contacts/Contacts";
import Copyright from "../copyright/Copyright";
import styles from "../footer/footer.module.css";
import FooterInfo from "./footerInfo";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["footer__content"]}>
          <div className={styles["footer__info"]}>
            <FooterInfo />
          </div>
          <div className={styles["footer__contacts"]}>
            <Contacts />
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
