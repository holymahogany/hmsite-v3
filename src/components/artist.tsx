import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Home-Artist.module.css";

const imgPaths = {
  waterColorPortrait1: "/static/img/hero/waterColorPortrait1.webp",
  waterColorPortrait2: "/static/img/hero/waterColorPortrait2.webp",
  waterColorPortrait3: "/static/img/hero/waterColorPortrait3.webp",
};

const Artist = () => {
  const watercolorPortraitSize = 300;

  return (
    <div className={styles["artist"]} id="artist">
      <div className={styles["artist-container"]}>
        <div className={styles["artist__watercolor-portrait-container-outer"]}>
          <motion.div
            className={styles["artist__watercolor-portrait-container-inner"]}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.5,
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
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className={styles["artist__text-headline"]}>Artist</div>
            <div className={styles["artist__text-body"]}>
              Taking inspiration from the
              <br />
              “ligne claire” tradition pioneered
              <br />
              by Hergé (the creator of Tintin),
              <br />
              I make drawings and paintings
              <br />
              with clear lines and bold colors.
              <br />
            </div>
          </motion.div>
        </div>
        <div className={styles["artist__watercolor-portrait-container-outer"]}>
          <motion.div
            className={styles["artist__watercolor-portrait-container-inner"]}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
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
        <div className={styles["artist__watercolor-portrait-container-outer"]}>
          <motion.div
            className={styles["artist__watercolor-portrait-container-inner"]}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.5,
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
