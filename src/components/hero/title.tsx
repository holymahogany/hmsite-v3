import { motion } from "framer-motion";

import styles from "@/styles/Home-Hero.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faMastodon,
  faItchIo,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

export const TitleStatic = () => {
  return (
    <div className={styles["header-right-content-container"]}>
      <div className={styles["header-right__peter-smyth-container"]}>
        <div>Peter</div>
        <div>Smyth</div>
      </div>
      <div className={styles["header-right__links"]}>
        <a href="#artist">Artist</a>
        <div className={styles["header-right__asterisk-container"]}>
          <FontAwesomeIcon icon={faAsterisk} />
        </div>
        <a href="#developer">Developer</a>
        <div className={styles["header-right__asterisk-container"]}>
          <FontAwesomeIcon icon={faAsterisk} />
        </div>
        <a href="#art-historian">Art Historian</a>
      </div>
      <div className={styles["header-right__social-links"]}>
        <a
          href="https://twitter.com/holy_mahogany/"
          className={styles["header-right__social-link"]}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <div className={styles["header-right__social-links-padding"]}></div>
        <a
          href="https://mastodon.gamedev.place/@holymahogany/"
          className={styles["header-right__social-link"]}
        >
          <FontAwesomeIcon icon={faMastodon} />
        </a>
        <div className={styles["header-right__social-links-padding"]}></div>
        <a
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
        </a>
      </div>
    </div>
  );
};

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
        <div>Smyth</div>
      </div>
      <div className={styles["header-right__links"]}>
        <a href="#artist">Artist</a>
        <div className={styles["header-right__asterisk-container"]}>
          <FontAwesomeIcon icon={faAsterisk} />
        </div>
        <a href="#developer">Developer</a>
        <div className={styles["header-right__asterisk-container"]}>
          <FontAwesomeIcon icon={faAsterisk} />
        </div>
        <a href="#art-historian">Art Historian</a>
      </div>
      <div className={styles["header-right__social-links"]}>
        <a
          href="https://twitter.com/holy_mahogany/"
          className={styles["header-right__social-link"]}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <div className={styles["header-right__social-links-padding"]}></div>
        <a
          href="https://mastodon.gamedev.place/@holymahogany/"
          className={styles["header-right__social-link"]}
        >
          <FontAwesomeIcon icon={faMastodon} />
        </a>
        <div className={styles["header-right__social-links-padding"]}></div>
        <a
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
        </a>
      </div>
    </motion.div>
  );
};
