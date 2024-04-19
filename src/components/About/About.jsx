import React from "react";
import styles from "./About.module.css";

export const About = () => {
  const gradientStyles = [
    styles.gradient0,
    styles.gradient1,
    styles.gradient2,
    styles.gradient3,
    styles.gradient4,
    styles.gradient5,
  ];
  const titles = Array(6).fill("ABOUT");
  const titleElements = titles.map((title, index) => (
    <h1 key={index} className={gradientStyles[index]}>
      {title}
    </h1>
  ));

  const titlesMobile = Array(3).fill("ABOUT");
  const titleElementMobile = titlesMobile.map((title, index) => (
    <h1 key={index} className={gradientStyles[index]}>
      {title}
    </h1>
  ));

  return (
    <section className={styles.container} id="about">
      <div className={styles.textContent}>
        <div className={styles.titleContainer}>
          <div className={styles.sectionTitle}>
            <>{titleElements}</>
          </div>
          <div className={styles.sectionTitleMobile}>
            <>{titleElementMobile}</>
          </div>
        </div>
        <div className={styles.bioContainer}>
          <h3 className={styles.title}>
            I'm Leo, a passionate builder in both physical and digital realms!
          </h3>
          <p className={styles.presentation}>
            From a young age, I've been captivated by the process of creation,
            diving into new technologies, coding, and tackling tough problems
            head-on. At Anheuser-Busch InBev, I thrived as a Software Developer,
            contributing to a REST API project while refining my teamwork and
            communication skills. <br /> <br />
            Now, in <strong>Victoria - BC</strong>, I'm eager to channel my
            enthusiasm and dedication into every endeavour. Whether it's coding,
            collaborating, or embracing new challenges, I'm committed to giving
            my best and making a meaningful impact.
          </p>
        </div>
      </div>
      <div className={styles.callToActionContainer}>
        <div className={styles.callToAction}>
          <div className={styles.informationBtn}>
            <button className={styles.toggle}>
              <div className={styles.toggleContent}>
                <i class="ri-plant-line"></i>
                <p className={styles.textInformation}>
                  I'm vegetarian since age 3
                </p>
              </div>
            </button>
            <button className={styles.toggle}>
              <div className={styles.toggleContent}>
                <i class="ri-earth-line"></i>
                <p className={styles.textInformation}>
                  I'm from Recife - PE, Brazil
                </p>
              </div>
            </button>
            <button className={styles.toggle}>
              <div className={styles.toggleContent}>
                <i class="ri-speak-line"></i>
                <p className={styles.textInformation}>
                  I can speak 5 languages
                </p>
              </div>
            </button>
            <button className={styles.toggle}>
              <div className={styles.toggleContent}>
                <i class="ri-heart-pulse-line"></i>
                <p className={styles.textInformation}>
                  Running is my favorite sport
                </p>
              </div>
            </button>
          </div>
          <div className={styles.rectangle}></div>
        </div>
      </div>
    </section>
  );
};
