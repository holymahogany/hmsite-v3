import styles from "@/styles/Home-Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-name"]}>&copy; Peter Smyth 2025</div>
        <div className={styles["footer-hm"]}>
          My domain name &mdash; &quot;holy mahogany&quot; &mdash; was a
          nickname given to the great modernist László Moholy-Nagy.{" "}
          <a href="https://moholy-nagy.org/">Visit his foundation.</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
