import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRef } from "react";

import styles from "@/styles/Home-Summary.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Summary = () => {
  let isMobile = useMediaQuery("(max-width:600px)");
  const wasEverMobile = useRef(false);
  if (isMobile) wasEverMobile.current = true;

  return (
    <div className={styles["summary"]} id="summary">
      <div className={styles["summary__outer-container"]}>
        <div className={styles["summary__inner-container"]}>
          <div className={styles["summary__text-headline"]}>
            I'm a multidisciplinary designer with a passion for visual
            storytelling.
          </div>
          <div className={styles["summary__text-body"]}>
            From bold posters and editorial layouts to immersive websites and
            video games, my work blends creativity with purpose. I’ve designed
            magazine covers, built digital experiences, illustrated for clients,
            and brought game worlds to life. I also teach art and art history,
            sharing my love for visual culture and helping others develop their
            creative voice. Whether it’s print, web, or interactive media, I
            approach every project with a focus on clarity, emotion, and impact.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
