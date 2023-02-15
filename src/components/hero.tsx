import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
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

const imgPaths = {
  selfPortrait: "/static/img/hero/selfPortrait.webp",
  toprow: "/static/img/hero/toprow.webp",
  bottomrow: "/static/img/hero/bottomrow.webp",
};

const Hero = () => {
  const imgRowWidth = 1400; //(140 + 35) * 8; // 140 is the width & height of BackgroundImg, 35 is its margin-right
  const bgAnimationSpeed = 12; // in seconds

  return (
    <div className={styles["header"]}>
      {/* Foreground */}

      <div className={styles["header-foreground"]}>
        <div className={styles["header-container"]}>
          <div className={styles["header-left"]}>
            <div className={styles["header-left-container"]}>
              <motion.div
                className={styles["header-left__img-container"]}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Image
                  className={styles["header-left__img"]}
                  src={imgPaths.selfPortrait}
                  alt="me"
                  fill
                  priority={true}
                />
              </motion.div>
            </div>
          </div>
          <div className={styles["header-middle-spacer"]} />
          <div className={styles["header-right"]}>
            <div className={styles["header-right-container"]}>
              <motion.div
                className={styles["header-right-content-container"]}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
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
                  <div
                    className={styles["header-right__social-links-padding"]}
                  ></div>
                  <a
                    href="https://mastodon.gamedev.place/@holymahogany/"
                    className={styles["header-right__social-link"]}
                  >
                    <FontAwesomeIcon icon={faMastodon} />
                  </a>
                  <div
                    className={styles["header-right__social-links-padding"]}
                  ></div>
                  <a
                    href="https://www.instagram.com/peterjacobsmyth/"
                    className={styles["header-right__social-link"]}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <div
                    className={styles["header-right__social-links-padding"]}
                  ></div>
                  <a
                    href="https://holymahogany.itch.io/"
                    className={styles["header-right__social-link"]}
                  >
                    <FontAwesomeIcon icon={faItchIo} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background */}

      <motion.div
        className={styles["header-background"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles["header-background-topspacer"]}></div>
        <div className={styles["header-background-toprow"]}>
          <motion.div
            animate={{
              x: [0, imgRowWidth * -1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              duration: bgAnimationSpeed,
            }}
          >
            <div className={styles["header-background-imgrow"]}>
              <Image
                src={imgPaths.toprow}
                className={styles["header-background-img"]}
                alt="Musician or musical object"
                width={4200}
                height={140}
                priority={true}
              />
            </div>
          </motion.div>
        </div>
        <div className={styles["header-background-middlerow"]}></div>
        <div className={styles["header-background-bottomrow"]}>
          <motion.div
            animate={{
              x: [imgRowWidth * -1, 0],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              duration: bgAnimationSpeed,
            }}
          >
            <div className={styles["header-background-imgrow"]}>
              <Image
                src={imgPaths.toprow}
                className={styles["header-background-img"]}
                alt="Musician or musical object"
                width={4200}
                height={140}
                priority={true}
              />
            </div>
          </motion.div>
        </div>
        <div className={styles["header-background-bottomspacer"]}></div>
      </motion.div>
    </div>
  );
};

export default Hero;
