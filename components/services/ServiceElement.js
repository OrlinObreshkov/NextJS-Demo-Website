import styles from "./ServiceElement.module.css";

function ServiceElement(props) {
  return (
    <li className={styles["service-element"]}>
      <div className={styles.service}>
        <span>{props.icon}</span>
        <h3 className={styles["service__title"]}>{props.title}</h3>
        <p className={styles["service__description"]}>{props.description}</p>
      </div>
    </li>
  );
}

export default ServiceElement;
