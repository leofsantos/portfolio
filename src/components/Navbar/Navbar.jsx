import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="#home">
        <img
          src={getImageUrl("mainIconLight.png")}
          alt="Main icon"
          className={styles.logo}
        />
      </a>
      <div className={styles.menu}>
        <ul className={menuOpen ? styles.items : styles.itemsClose}>
          <li>
            <a href="#about" className={styles.link}>About</a>
          </li>
          <li>
            <a href="#skills" className={styles.link}>Skills</a>
          </li>
          <li>
            <a href="#projects" className={styles.link}>Projects</a>
          </li>
          <li>
            <a href="#contact" className={styles.link}>Contact</a>
          </li>
          <li className={styles.resume}>
            <button><a href="/assets/pdf/Leonardo-dos-Santos-Cv.pdf" download="">Resume</a></button>
          </li>
        </ul>
      </div>
      <div className={styles.actions}>
        <div
          className={styles.toggle}
          id="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <div className={styles.close}>
              <i className="ri-close-line"></i>
            </div>
          ) : (
            <div className={styles.open}>
              <i className="ri-apps-2-line"></i>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
