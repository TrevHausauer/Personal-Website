import React from "react";
import styles from "./About.module.css"
import aboutImage from "/assets/About/about.png"
import cursorImage from "/assets/About/cursorIcon.png"
import serverImage from "/assets/About/serverIcon.png"
import uiIcon from "/assets/About/uiIcon.png"

export const About = () => {
    return (<section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img src={aboutImage} alt="Me Sitting with Laptop" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src={cursorImage} alt="Cursor Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                </div>
            </li>
            <li className={styles.aboutItem}><img src={serverImage} alt="Server Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimized backend systems and APIs</p>
                </div>
            </li>
            <li className={styles.aboutItem}><img src={uiIcon} alt="UI Icon" />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have designed landing pages and have created design systems as well</p>
                </div>
            </li>
        </ul>
        </div>
        </section>
    );
}