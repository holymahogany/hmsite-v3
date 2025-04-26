import { motion } from "framer-motion";

import styles from "@/styles/Home-Hero.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const TitleAnimated = () => {
  return (
    <motion.div
      className={styles["header-right-content-container"]}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
    >
      <div className={styles["header-right__peter-smyth-container"]}>
        <div>Peter</div>
        <div className={styles["header-right__smyth"]}>Smyth</div>
      </div>
      <div className={styles["header-right__links"]}>
        <div>Cartoonist</div>
        <div className={styles["header-right__asterisk-container"]}>
          <FontAwesomeIcon icon={faAsterisk} />
        </div>
        <div>Designer</div>
        <div className={styles["header-right__asterisk-container"]}>
          <FontAwesomeIcon icon={faAsterisk} />
        </div>
        <div>Teacher</div>
      </div>
      <div className={styles["header-right__button-container"]}>
        <a href="#projects">
          <button className={styles["button"]}>
            <span>VIEW PROJECTS</span>
            <FontAwesomeIcon
              className={styles["button-arrow"]}
              icon={faArrowRight}
            />
          </button>
        </a>
        {/* <a
          href="https://www.instagram.com/peterjacobsmyth/"
          className={styles["header-right__social-link"]}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <div className={styles["header-right__social-links-padding"]}></div>
        <a
          href="https://holymahogany.itch.io/"
          className={styles["header-right__social-link"]}
        >
          <FontAwesomeIcon icon={faItchIo} />
        </a> */}
      </div>
    </motion.div>
  );
};
