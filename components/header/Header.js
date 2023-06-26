import Image from "next/image";
import styles from "./Header.module.css";
import logoIcon from "../../public/static/logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header__logo"]}>
        <span>
          <Image src={logoIcon} width={100} height={100} alt="logo" />
        </span>
      </div>
      <h1 className={styles["header__title"]}>Stellar</h1>
      <p className={styles["header__subtitle"]}>
        Just another free, fully responsive site template
        <br />
        built by Orlinzer for exercise.
      </p>
    </header>
  );
}

export default Header;
