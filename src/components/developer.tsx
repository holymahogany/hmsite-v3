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

const Developer = () => {
  const drawingSize = 300;

  return (
    <div className={styles["developer"]} id="developer">
      <div className={styles["developer-container"]}>
        <div className={styles["developer__drawing-container-outer-one"]}>
          <motion.div
            className={styles["developer__drawing-container-inner"]}
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
              className={styles["developer__drawing"]}
              src={imgPaths.object3}
              alt="watercolor portrait of a woman"
              width={drawingSize}
              height={drawingSize}
            />
          </motion.div>
        </div>
        <div className={styles["developer__text-outer-container"]}>
          <motion.div
            className={styles["developer__text-inner-container"]}
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className={styles["developer__text-headline"]}>Developer</div>
            <div className={styles["developer__text-body"]}>
              Fascinated by art that’s generative and interactive, I build video
              games and websites using technologies like Pico-8 and React.
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
          </motion.div>
        </div>
        <div className={styles["developer__drawing-container-outer-three"]}>
          <motion.div
            className={styles["developer__drawing-container-inner"]}
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
