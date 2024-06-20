import React from "react";
import styles from "./Cards.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {projects.map((skill, id) => {
          return (
            <div className={styles.card} key={id}>
              <div className={styles.top}>
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={skill.imageDescription}
                />
              </div>
              <div className={styles.text}>
                <h3>{skill.ProjectTitle}</h3>
                <p>{skill.ProjectDescription}</p>
              </div>
              <div className={styles.bottom}>
                <button>
                  <a href={skill.ProjectDemo}>VISIT HERE</a>
                </button>
                <a href={skill.ProjectRepo}>
                  <i class="ri-github-fill"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
