import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "/assets/contact/emailIcon.png"
import linkedinIcon from "/assets/contact/linkedinIcon.png"
import githubIcon from "/assets/contact/githubIcon.png"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:hausauertrev@gmail.com">hausauertrev@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://linkedin.com/in/trevhausauer">https://linkedin.com/in/trevhausauer</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/TrevHausauer">https://github.com/TrevHausauer</a>
        </li>
      </ul>
    </footer>
  );
};