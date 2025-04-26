import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { useRef } from "react";

import { TitleAnimated } from "./title";
import styles from "@/styles/Home-Hero.module.css";

const imgPaths = {
  selfPortrait: "/static/img/hero/newSelfPortrait.webp",
  toprow: "/static/img/hero/toprow.webp",
  bottomrow: "/static/img/hero/bottomrow.webp",
  toprowMobile: "/static/img/hero/toprowMobile.webp",
  bottomrowMobile: "/static/img/hero/bottomrowMobile.webp",
};

// i want some mounting animations off for mobile and on for desktop.
// this is a hack to keep the mounting animation from activating if
// the user resizes the window from mobile-size to desktop-size.
// {isMobile ? (
//   <MobileComponent />
// ) : wasEverMobile ? (
//   <MobileComponent />
// ) : (
//   <DesktopComponent />
// )}

const Hero = () => {
  const imgRowWidth = 1400; //(140 + 35) * 8; // 140 is the width & height of BackgroundImg, 35 is its margin-right
  const bgAnimationSpeed = 12; // in seconds

  let isMobile = useMediaQuery("(max-width:600px)");
  const wasEverMobile = useRef(false);
  if (isMobile) wasEverMobile.current = true;

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
              <TitleAnimated />
            </div>
          </div>
        </div>
      </div>
      {/* Background */}
      <motion.div
        className={styles["header-background"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
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
                src={isMobile ? imgPaths.toprowMobile : imgPaths.toprow}
                className={styles["header-background-img"]}
                alt="Musician or musical object"
                width={isMobile ? 2800 : 4200}
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
                src={isMobile ? imgPaths.bottomrowMobile : imgPaths.bottomrow}
                className={styles["header-background-img"]}
                alt="Musician or musical object"
                width={isMobile ? 2800 : 4200}
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
