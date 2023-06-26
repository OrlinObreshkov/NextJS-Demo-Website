import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#">Introduction</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Crypto</a>
        </li>
        <li>
          <a href="#">Get started</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
