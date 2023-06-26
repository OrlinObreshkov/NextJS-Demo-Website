"use client";
import styles from "./Button.module.css";

function Button(props) {
  const buttonFontColor = {
    color: props.color,
  };

  return (
    <a style={buttonFontColor} className={styles.button}>
      {props.children}
    </a>
  );
}

export default Button;
