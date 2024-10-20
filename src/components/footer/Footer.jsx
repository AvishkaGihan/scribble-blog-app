import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Scribble</div>
      <div className={styles.text}>
        © 2024 Avishka Gihan | Powered by Scribble
      </div>
    </div>
  );
};

export default Footer;
