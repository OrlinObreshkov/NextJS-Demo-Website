import styles from "../copyright/Copyright.module.css";

function Copyright() {
  return (
    <div>
      <p className={styles.copyright}>
        © Untitled. Design: Orlinzer. Demo Images:{" "}
        <a href="https://unsplash.com">Unsplash</a>
      </p>
    </div>
  );
}

export default Copyright;
