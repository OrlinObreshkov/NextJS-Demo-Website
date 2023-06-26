"use client";
import styles from "../UI/ButtonBlue.module.css";

function ButtonBlue(props) {
  return <button className={styles.button}>{props.children}</button>;
}

export default ButtonBlue;
