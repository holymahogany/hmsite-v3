import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { useRef } from "react";

import styles from "@/styles/Home-Artist.module.css";
import { TextStatic, TextAnimated } from "./text";

const imgPaths = {
  waterColorPortrait1: "/static/img/hero/watercolorPortrait1.webp",
  waterColorPortrait2: "/static/img/hero/watercolorPortrait2.webp",
  waterColorPortrait3: "/static/img/hero/watercolorPortrait3.webp",
};

const Artist = () => {
  const watercolorPortraitSize = 300;

  let isMobile = useMediaQuery("(max-width:600px)");
  const wasEverMobile = useRef(false);
  if (isMobile) wasEverMobile.current = true;

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
          <TextStatic />
          {/* {isMobile ? (
            <TextStatic />
          ) : wasEverMobile.current ? (
            <TextStatic />
          ) : (
            <TextAnimated />
          )} */}
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
