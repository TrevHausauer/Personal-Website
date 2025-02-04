import React from 'react'
import styles from "./Hero.module.css"
import heroImage from "/assets/hero/trev.png"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Trev</h1>
                <p className={styles.description}>I'm a full-stack developer with front and back-end experience using Bootstrap, HTML, CSS, C#, JavaScript, and SQL. 
                Reach out if you'd like to learn more!
                </p>
                <a className={styles.contactBtn} href="mailto:hausauertrev@gmail.com">Contact Me</a>
            </div>
            <img src= {heroImage} alt="Hero Image of Me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}