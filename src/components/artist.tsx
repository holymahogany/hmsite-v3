import styles from "@/styles/Home-Artist.module.css";

const Artist = () => {
  return (
    <div className={styles["artist"]} id="artist">
      <div className={styles["artist__watercolor-portrait-container"]}></div>
      <div className={styles["artist__text-outer-container"]}>
        <div className={styles["artist__text-inner-container"]}>
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
        </div>
      </div>
      <div className={styles["artist__watercolor-portrait-container"]}></div>
      <div className={styles["artist__watercolor-portrait-container"]}></div>
    </div>
  );
};

export default Artist;
