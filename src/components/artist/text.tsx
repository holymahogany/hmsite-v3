import { motion } from "framer-motion";

import styles from "@/styles/Home-Artist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const TextStatic = () => {
  return (
    <div className={styles["artist__text-inner-container"]}>
      <div className={styles["artist__text-headline"]}>Artist</div>
      <div className={styles["artist__text-body"]}>
        Taking inspiration from the “ligne claire” tradition pioneered by Hergé
        (the creator of Tintin), I make drawings and paintings with clear lines
        and bold colors.
      </div>
      <a href="https://www.instagram.com/peterjacobsmyth/">
        <button className={styles["button"]}>
          <span>FIND MY ART</span>
          <FontAwesomeIcon
            className={styles["button-arrow"]}
            icon={faArrowRight}
          />
        </button>
      </a>
    </div>
  );
};

export const TextAnimated = () => {
  return (
    <motion.div
      className={styles["artist__text-inner-container"]}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className={styles["artist__text-headline"]}>Artist</div>
      <div className={styles["artist__text-body"]}>
        Taking inspiration from the “ligne claire” tradition pioneered by Hergé
        (the creator of Tintin), I make drawings and paintings with clear lines
        and bold colors.
      </div>
      <a href="https://www.instagram.com/peterjacobsmyth/">
        <button className={styles["button"]}>
          <span>FIND MY ART</span>
          <FontAwesomeIcon
            className={styles["button-arrow"]}
            icon={faArrowRight}
          />
        </button>
      </a>
    </motion.div>
  );
};
