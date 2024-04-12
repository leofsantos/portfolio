import React from "react";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.profile}>
            <div className={styles.content}>
              <img src="assets/profile.png" alt="" className={styles.picture} />
            </div>
          </div>
        </div>
        <div className={styles.bio}>
          <div className={styles.description}>
            <h1>Hello</h1>
            <h1>I am Leo</h1>
            <p>Full-Stack Developer</p>
          </div>
          <div className={styles.socialMedia}>
            <button className={styles.roundBtn}>
              <a
                href="https://www.github.com/leofsantos"
                target="_blank"
                className={styles.socialMediaLink}
              >
                <i class="ri-github-fill"></i>
              </a>
            </button>
            <button className={styles.rectangleBtn}>
              <a
                href="https://www.linkedin.com/in/leonardo-fs"
                target="_blank"
                className={styles.socialMediaLink}
              >
                <i class="ri-linkedin-box-fill"></i>
              </a>
            </button>
            <button className={styles.rectangleBtn}>
              <a
                href="mailto:leonardofs.dev@gmail.com"
                target="_blank"
                className={styles.socialMediaLink}
              >
                <i class="ri-mail-line"></i>
              </a>
            </button>
          </div>
        </div>
        <div className={styles.callToAction}>
          <a href="#contact">
            <button className={styles.contact}>
              <div className={styles.toggle}>
                <i class="ri-lightbulb-flash-line"></i>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.elipse1}></div>
        <div className={styles.elipse2}></div>
      </div>
    </section>
  );
};
