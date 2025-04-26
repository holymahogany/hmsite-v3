import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRef } from "react";

import styles from "@/styles/Home-Artist.module.css";

const imgPaths = {
  waterColorPortrait1: "/static/img/hero/watercolorPortrait1.webp",
  waterColorPortrait2: "/static/img/hero/watercolorPortrait2.webp",
  waterColorPortrait3: "/static/img/hero/watercolorPortrait3.webp",
};

const Posters = () => {
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
          <Image
            className={styles["artist__watercolor-portrait"]}
            src={imgPaths.waterColorPortrait1}
            alt="watercolor portrait of a woman"
            width={watercolorPortraitSize}
            height={watercolorPortraitSize}
          />
        </div>
        <div className={styles["artist__text-outer-container"]}>
          <div className={styles["artist__text-inner-container"]}>
            <div className={styles["artist__text-headline"]}>Artist</div>
            <div className={styles["artist__text-body"]}>
              Taking inspiration from the “ligne claire” tradition pioneered by
              Hergé (the creator of Tintin), I make drawings and paintings with
              clear lines and bold colors.
            </div>
          </div>
        </div>
        <div
          className={styles["artist__watercolor-portrait-container-outer-two"]}
        >
          <Image
            className={styles["artist__watercolor-portrait"]}
            src={imgPaths.waterColorPortrait3}
            alt="watercolor portrait of a woman"
            width={watercolorPortraitSize}
            height={watercolorPortraitSize}
          />
        </div>
        <div
          className={
            styles["artist__watercolor-portrait-container-outer-three"]
          }
        >
          <Image
            className={styles["artist__watercolor-portrait"]}
            src={imgPaths.waterColorPortrait2}
            alt="watercolor portrait of a woman"
            width={watercolorPortraitSize}
            height={watercolorPortraitSize}
          />
        </div>
      </div>
    </div>
  );
};

export default Posters;
