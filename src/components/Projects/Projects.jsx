import React from "react";
import styles from "./Projects.module.css";
import { Cards } from "../Cards/Cards";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.elipse}></div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Main Projects</h1>
        </div>
        <div className={styles.cards}>
          <Cards />
        </div>
      </div>
    </section>
  );
};
