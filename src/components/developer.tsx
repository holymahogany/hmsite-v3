import { useEffect, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Home-Developer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const imgPaths = {
  object1: "/static/img/hero/object1.webp",
  object2: "/static/img/hero/object3.webp",
  object3: "/static/img/hero/object7.webp",
};

// this hook will be true if accessed during Server-Side Rendering, false if not
const useIsSsr = () => {
  // we always start off in "SSR mode", to ensure our initial browser render
  // matches the SSR render
  const [isSsr, setIsSsr] = useState(true);

  useEffect(() => {
    // `useEffect` never runs on the server, so we must be on the client if
    // we hit this block
    setIsSsr(false);
  }, []);

  return isSsr;
};

const Developer = () => {
  const drawingSize = 300;

  let mobile = false;

  const isSsr = useIsSsr();
  if (!isSsr) {
    mobile = window.innerWidth <= 600;
  }

  return (
    <div className={styles["developer"]} id="developer">
      <div className={styles["developer-container"]}>
        <div className={styles["developer__drawing-container-outer-one"]}>
          <motion.div
            className={styles["developer__drawing-container-inner"]}
            initial={mobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              className={styles["developer__drawing"]}
              src={imgPaths.object1}
              alt="watercolor portrait of a woman"
              width={drawingSize}
              height={drawingSize}
            />
          </motion.div>
        </div>
        <div className={styles["developer__drawing-container-outer-two"]}>
          <motion.div
            className={styles["developer__drawing-container-inner"]}
            initial={mobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              className={styles["developer__drawing"]}
              src={imgPaths.object3}
              alt="watercolor portrait of a woman"
              width={drawingSize}
              height={drawingSize}
            />
          </motion.div>
        </div>
        <div className={styles["developer__text-outer-container"]}>
          <div className={styles["developer__text-inner-container"]}>
            <div className={styles["developer__text-headline"]}>Developer</div>
            <div className={styles["developer__text-body"]}>
              I like art that’s generative and interactive, so I build games and
              websites using things like Pico-8, Puzzlescript, and this or that
              JavaScript framework.
            </div>
            <a href="https://holymahogany.itch.io/">
              <button className={styles["button"]}>
                <span>PLAY MY GAMES</span>
                <FontAwesomeIcon
                  className={styles["button-arrow"]}
                  icon={faArrowRight}
                />
              </button>
            </a>
            {/* <button className={styles["button2"]}>
              <span>SEE MY WEB PORTFOLIO</span>
              <FontAwesomeIcon
                className={styles["button-arrow"]}
                icon={faArrowRight}
              />
            </button> */}
          </div>
        </div>
        <div className={styles["developer__drawing-container-outer-three"]}>
          <motion.div
            className={styles["developer__drawing-container-inner"]}
            initial={mobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              className={styles["developer__drawing"]}
              src={imgPaths.object2}
              alt="watercolor portrait of a woman"
              width={drawingSize}
              height={drawingSize}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
