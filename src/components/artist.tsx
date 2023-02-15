import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Home-Artist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const imgPaths = {
  waterColorPortrait1: "/static/img/hero/watercolorPortrait1.webp",
  waterColorPortrait2: "/static/img/hero/watercolorPortrait2.webp",
  waterColorPortrait3: "/static/img/hero/watercolorPortrait3.webp",
};

const Artist = () => {
  const watercolorPortraitSize = 300;

  return (
    <div className={styles["artist"]} id="artist">
      <div className={styles["artist-container"]}>
        <div
          className={styles["artist__watercolor-portrait-container-outer-one"]}
        >
          <motion.div
            className={styles["artist__watercolor-portrait-container-inner"]}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              className={styles["artist__watercolor-portrait"]}
              src={imgPaths.waterColorPortrait1}
              alt="watercolor portrait of a woman"
              width={watercolorPortraitSize}
              height={watercolorPortraitSize}
            />
          </motion.div>
        </div>
        <div className={styles["artist__text-outer-container"]}>
          <motion.div
            className={styles["artist__text-inner-container"]}
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className={styles["artist__text-headline"]}>Artist</div>
            <div className={styles["artist__text-body"]}>
              Taking inspiration from the “ligne claire” tradition pioneered by
              Hergé (the creator of Tintin), I make drawings and paintings with
              clear lines and bold colors.
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
        </div>
        <div
          className={styles["artist__watercolor-portrait-container-outer-two"]}
        >
          <motion.div
            className={styles["artist__watercolor-portrait-container-inner"]}
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              className={styles["artist__watercolor-portrait"]}
              src={imgPaths.waterColorPortrait3}
              alt="watercolor portrait of a woman"
              width={watercolorPortraitSize}
              height={watercolorPortraitSize}
            />
          </motion.div>
        </div>
        <div
          className={
            styles["artist__watercolor-portrait-container-outer-three"]
          }
        >
          <motion.div
            className={styles["artist__watercolor-portrait-container-inner"]}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              className={styles["artist__watercolor-portrait"]}
              src={imgPaths.waterColorPortrait2}
              alt="watercolor portrait of a woman"
              width={watercolorPortraitSize}
              height={watercolorPortraitSize}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
