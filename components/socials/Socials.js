import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../socials/Socials.module.css";

function Socials() {
  return (
    <div className={styles.socials}>
      <ul>
        <li>
          <a href="#">
            <span>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ fontSize: 35, color: "#fff" }}
              ></FontAwesomeIcon>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: 35, color: "#fff" }}
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: 35, color: "#fff" }}
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faPinterest}
              style={{ fontSize: 35, color: "#fff" }}
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: 35, color: "#fff" }}
            ></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
