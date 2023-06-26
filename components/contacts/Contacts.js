import styles from "../contacts/Contacts.module.css";
import Copyright from "../copyright/Copyright";
import Socials from "../socials/Socials";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <h2 className={styles["contacts__title"]}>Contacts</h2>
      <ul>
        <li>
          <div>
            <p>Address:</p>
            <span>1234 Somewhere Road • Nashville, TN 00000 • USA</span>
          </div>
        </li>
        <li>
          <div>
            <p>Phone:</p>
            <span>(000) 000-000-000</span>
          </div>
        </li>
        <li>
          <div>
            <p>Email:</p>
            <span>information@gmail.com</span>
          </div>
        </li>
      </ul>
      <Socials />
    </div>
  );
}

export default Contacts;
