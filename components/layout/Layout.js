import { Fragment } from "react";
import styles from "./Layout.module.css";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Footer from "../footer/footer";

function Layout(props) {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <Header />
        <Nav />
        <main className={styles.layout}>{props.children}</main>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
