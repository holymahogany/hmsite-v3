import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Home-ArtHistorian.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const imgPaths = {
  stJerome: "/static/img/hero/stJeromeReadingGarfield.webp",
};

const ArtHistorian = () => {
  const drawingSize = 300;

  return (
    <div className={styles["art-historian"]} id="art-historian">
      <div className={styles["art-historian-container"]}>
        <div className={styles["art-historian__text-outer-container"]}>
          <motion.div
            className={styles["art-historian__text-inner-container"]}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className={styles["art-historian__text-headline"]}>
              Art Historian
            </div>
            <div className={styles["art-historian__text-body"]}>
              I’m a student of modern art, from high to low, pop culture to
              kitsch. My research centers on newspaper comics and abstract
              painting.
            </div>
            <a href="https://read.dukeupress.edu/poetics-today/article-abstract/43/3/533/317591/Mixing-Comics-and-Literature-in-Calvino-s-Castle">
              <button className={styles["button"]}>
                <span>READ MY LATEST</span>
                <FontAwesomeIcon
                  className={styles["button-arrow"]}
                  icon={faArrowRight}
                />
              </button>
            </a>
          </motion.div>
        </div>
        <div className={styles["art-historian__drawing-container-outer"]}>
          <motion.div
            className={styles["art-historian__drawing-container-inner"]}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              className={styles["art-historian__drawing"]}
              src={imgPaths.stJerome}
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

export default ArtHistorian;
